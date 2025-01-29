const FileParsing = async (formData, rows) => {
    if (!formData || !formData.files || !Array.isArray(rows)) {
        return [];
    }

    const { files } = formData;
    const filesParsed = [];

    for (const fileEntry of files) {
        const [fileName] = fileEntry.name.split(".");

        for (const row of rows) {
            if (fileName === row.file) {
                const file = await fileEntry.getFile();
                const content = await file.text();
                const functions = [];

                const lines = content.split("\n");
                let pendingComments = [];
                let insideBlockComment = false;
                let blockCommentBuffer = "";

                for (let i = 0; i < lines.length; i++) {
                    let line = lines[i].trim();

                    if (/^\/\/\s?[Dd]oc:/.test(line)) {
                        pendingComments.push(line.replace(/^\/\/\s?[Dd]oc:\s?/, "").trim());
                    }

                    if (/^\/\*\s?[Dd]oc:/.test(line)) {
                        insideBlockComment = true;
                        blockCommentBuffer = line.replace(/^\/\*\s?[Dd]oc:\s?/, "").trim();
                    } else if (insideBlockComment) {
                        if (line.endsWith("*/")) {
                            insideBlockComment = false;
                            blockCommentBuffer += " " + line.replace("*/", "").trim();
                            pendingComments.push(blockCommentBuffer.trim());
                            blockCommentBuffer = "";
                        } else {
                            blockCommentBuffer += " " + line.trim();
                        }
                    }

                    if (i + 1 < lines.length) {
                        let nextLine = lines[i + 1].trim();
                        if (nextLine.startsWith("const ")) {
                            let functionStart = nextLine.indexOf("const") + 6;
                            let functionEnd = nextLine.indexOf(" ", functionStart);

                            if (functionEnd !== -1 && pendingComments.length > 0) {
                                let functionName = nextLine.substring(functionStart, functionEnd).trim();

                                functions.push({
                                    functionName: functionName || "",
                                    comments: [...pendingComments],
                                });

                                pendingComments = [];
                            }
                        }
                    }
                }

                filesParsed.push({
                    name: fileName,
                    functions: functions.length > 0 ? functions : [{ functionName: "", comments: [] }],
                });
            }
        }
    }

    return filesParsed;
};

module.exports = FileParsing;
