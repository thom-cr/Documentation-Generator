const WritePDF = (outputTitle, outputNameFilePDF, filesParsed) => {
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF();
    let currentFilePosition = 40;
    let currentCommentPosition = 50;
    const pageHeight = 280;

    doc.setFontSize(22);
    doc.setFont("Helvetica", "Bold");
    doc.text(outputTitle, 10, 20);
    doc.setFontSize(16);

    let linesNumber = 0;

    for (let i = 0; i < filesParsed.length; i++) {
        const dash = "-";
        const fileName = dash.concat(" ", filesParsed[i].name, " :");

        doc.setFont("Helvetica", "Bold");
        doc.text(fileName, 20, currentFilePosition);
        doc.setFont("Helvetica", "");

        if (currentFilePosition > pageHeight) {
            doc.addPage();
            currentFilePosition = 20;
        }

        currentCommentPosition = currentFilePosition + 10;

        for (let j = 0; j < filesParsed[i].functions.length; j++) {
            const functionName = filesParsed[i].functions[j].functionName;
            const comments = filesParsed[i].functions[j].comments;

            if (functionName) { 
                const funcText = `Fonction ${functionName} :`;
                doc.setFont("Helvetica", "Bold");
                doc.text(funcText, 30, currentCommentPosition);
                currentCommentPosition += 10;
            }

            if (comments.length > 0) {
                doc.setFont("Helvetica", "");
                
                if (!functionName) {
                    currentCommentPosition += 5;
                }

                let splitText = doc.splitTextToSize(comments, 160);
                let lineHeight = 8;

                for (let m = 0; m < splitText.length; m++) {
                    if (currentCommentPosition > pageHeight) {
                        doc.addPage();
                        currentCommentPosition = 20;
                    }
                    doc.text(splitText[m], 40, currentCommentPosition);
                    currentCommentPosition += lineHeight;
                }
            }

            linesNumber = currentCommentPosition;
        }

        if (linesNumber === 0) {
            linesNumber = currentFilePosition + 10;
        }

        currentFilePosition = linesNumber + 10;
    }

    doc.save(outputNameFilePDF);
};

module.exports = WritePDF;