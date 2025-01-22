import { saveAs } from 'file-saver';

const WriteMarkdown = (outputTitleMarkdown, outputNameFileMarkdown, filesParsed) => {
    const data = [];
    
    data.push(outputTitleMarkdown);

    for (let i = 0; i < filesParsed.length; i++) {
        const star = "*";
        const fileName = star.concat(" __", filesParsed[i].name, "__ :");
        
        data.push(fileName);
        
        const tabStar = "   *";

        for (let j = 0; j < filesParsed[j].comments.length; j++) {
            const comment = tabStar.concat(" ", filesParsed[i].comments[j]);
            data.push(comment);
        }
    }

    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, outputNameFileMarkdown);
}

export default WriteMarkdown;