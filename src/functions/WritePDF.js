const WritePDF = (outputTitle, outputNameFilePDF, filesParsed) => {
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF();
    
    doc.setFontSize(28);
    doc.setFont("Helvetica", "Bold");
    doc.text(outputTitle, 40, 20);
    doc.setFontSize(16);

    let j = 40;
    let k = 50;

    for (let i = 0; i < filesParsed.length; i++) {
        const dash = "-";
        const fileName = dash.concat(" ", filesParsed[i].name, " :");
        console.log(doc.getFontList());
        doc.setFont("Helvetica", "Bold");
        doc.text(fileName, 20, j);
        doc.setFont("Helvetica", "");
        doc.text(filesParsed[i].comments, 20, k);
        
        j += 30;
        k += 30;
    }

    doc.save(outputNameFilePDF);
};

export default WritePDF;