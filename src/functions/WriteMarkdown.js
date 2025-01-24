import { saveAs } from 'file-saver';

const WriteMarkdown = (outputTitleMarkdown, outputNameFileMarkdown, filesParsed) => {
    const star = "*";
    const tabStar = "   *";
    let data = [];

    data.push(outputTitleMarkdown);

    for (let i = 0; i < filesParsed.length; i++) {
        const fileName = star.concat(" __", filesParsed[i].name, "__ :");
        
        data.push(fileName);

        for (let j = 0; j < filesParsed[i].comments.length; j++) {
            const comment = tabStar.concat(" ", filesParsed[i].comments[j]);
            
            data.push(comment);
        }
    }

    data = data.join('\n');

    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    
    saveAs(blob, outputNameFileMarkdown);
}

module.exports = WriteMarkdown;