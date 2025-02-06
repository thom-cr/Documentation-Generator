const FileParsing = async (formData, rows) => {
    if (!formData || !formData.files || !Array.isArray(rows)) {
        return [];
    }

    const { files } = formData;
    const filesParsed = [];

    for (const fileEntry of files) {
        const [fileName, ...extParts] = fileEntry.name.split(".");
        const extension = extParts.length ? extParts.join(".") : "";

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

                    let nextIndex = i + 1;
                    
                    while (nextIndex < lines.length && lines[nextIndex].trim() === "") {
                        nextIndex++;
                    }

                    let nextLine = nextIndex < lines.length ? lines[nextIndex].trim() : "";
                    let isFunctionDeclaration =
                        nextLine.startsWith("const ") || nextLine.indexOf("function") !== -1;

                    if (isFunctionDeclaration) {
                        let functionName = "";

                        if (nextLine.startsWith("const ")) {
                            let functionStart = nextLine.indexOf("const") + 6;
                            let functionEnd = nextLine.indexOf(" ", functionStart);
                            
                            if (functionEnd !== -1) {
                                functionName = nextLine.substring(functionStart, functionEnd).trim();
                            }
                        } else if (nextLine.indexOf("function") !== -1) {
                            let functionStart = nextLine.indexOf("function") + 9;
                            let functionEnd = nextLine.indexOf(" ", functionStart);
                            
                            if (functionEnd !== -1) {
                                functionName = nextLine.substring(functionStart, functionEnd).trim();
                            }
                        }

                        if (functionName && pendingComments.length > 0) {
                            functions.push({
                                functionName: functionName,
                                comments: [...pendingComments],
                            });

                            pendingComments = [];
                        }
                    } else {
                        if (pendingComments.length > 0) {
                            functions.push({
                                functionName: "",
                                comments: [...pendingComments],
                            });

                            pendingComments = [];
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