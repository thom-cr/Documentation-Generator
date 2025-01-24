const FileParsing = async (formData, rows) => {
    const { files } = formData;
    const filesParsed = [];
    
    for (let i = 0; i < files.length; i++) {
        const [fileName] = files[i].name.split(".");

        for (let j = 0; j < rows.length; j++) {
            if (fileName == rows[j].file) {
                const file = await files[i].getFile();
                const content = await file.text();
                let comments = [];

                for (let l = 0; l < content.length; l++) {
                    if (content.substring(l, l + 6) === "//doc:" || content.substring(l, l + 6) === "//Doc:") {
                        let start = l + 6;
                        let end = content.indexOf('\n', start);

                        if (end !== -1) {

                            comments.push(content.substring(start, end).trim());
                            l = end;
                        }
                    } else if (content.substring(l, l + 7) === "// doc:" || content.substring(l, l + 7) === "// Doc:") {
                        let start = l + 7;
                        let end = content.indexOf('\n', start);

                        if (end !== -1) {

                            comments.push(content.substring(start, end).trim());
                            l = end;
                        }
                    } else if (content.substring(l, l + 6) === "/*doc:" || content.substring(l, l + 6) === "/*Doc:") {
                        let start = l + 6;
                        let end = content.indexOf('*/', start);

                        if (end !== -1) {

                            let comment = content.substring(start, end).trim();
                            comment = comment.replace(/\r\n/g, ' ')
                                             .replace(/\s+/g, ' ');
                            comments.push(comment);
                            l = end;
                        }
                    } else if (content.substring(l, l + 7) === "/* doc:" || content.substring(l, l + 7) === "/* Doc:") {
                        let start = l + 7;
                        let end = content.indexOf('*/', start);

                        if (end !== -1) {

                            let comment = content.substring(start, end).trim();
                            comment = comment.replace(/\r\n/g, ' ')
                                             .replace(/\s+/g, ' ');
                            comments.push(comment);
                            l = end;
                        }
                    }
                }

                filesParsed.push({ name: fileName, comments: comments || ""});
            }
        }
    }

    return filesParsed;
};

module.exports = FileParsing; 