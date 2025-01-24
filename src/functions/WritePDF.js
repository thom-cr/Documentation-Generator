const { jsPDF } = require("jspdf");

const WritePDF = (outputTitle, outputNameFilePDF, filesParsed) => {
    const doc = new jsPDF();
    let j = 40;
    let k = 50;
    
    doc.setFontSize(22);
    doc.setFont("Helvetica", "Bold");
    doc.text(outputTitle, 10, 20);
    doc.setFontSize(16);
    
    let linesNumber = 0;
    
    for (let i = 0; i < filesParsed.length; i++) {
        const dash = "-";
        const fileName = dash.concat(" ", filesParsed[i].name, " :");
        
        doc.setFont("Helvetica", "Bold");
        doc.text(fileName, 20, j);
        doc.setFont("Helvetica", "");
    
        k = j + 10;
    
        for (let l = 0; l < filesParsed[i].comments.length; l++) {
            let comment = filesParsed[i].comments[l];
            let splitText = doc.splitTextToSize(comment, 180);
            let lineHeight = 8;
    
            for (let m = 0; m < splitText.length; m++) {
                doc.text(splitText[m], 20, k);
                k += lineHeight;
            }
    
            linesNumber = k;
        }
    
        j = linesNumber + 10;
    }

    doc.save(outputNameFilePDF);
};

module.exports = WritePDF;
