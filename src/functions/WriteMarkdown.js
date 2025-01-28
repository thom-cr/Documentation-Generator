const { saveAs } = require('file-saver');

const WriteMarkdown = (outputTitleMarkdown, outputNameFileMarkdown, filesParsed) => {
    const star = "*";
    const tabStar = "   *";
    const doubleTabStar = "     *";
    let data = [];

    data.push(outputTitleMarkdown);

    for (let i = 0; i < filesParsed.length; i++) {
        const fileName = star.concat(" __", filesParsed[i].name, "__ :");
        
        data.push(fileName);

        for (let j = 0; j < filesParsed[i].functions.length; j++) {
            const functionName = filesParsed[i].functions[j].functionName;
            const comments = filesParsed[i].functions[j].comments;

            const functionHeader = tabStar.concat(" **Fonction ", functionName, "** :");
            data.push(functionHeader);

            const comment = doubleTabStar.concat(" ", comments);
            data.push(comment);
        }
    }

    data = data.join('\n');

    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    
    saveAs(blob, outputNameFileMarkdown);
}

module.exports = WriteMarkdown;