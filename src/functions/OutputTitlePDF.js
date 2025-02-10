//doc: Add PDF syntax

const OutputTitlePDF = (projectName) => {
    const documentation = "Documentation de";
    const outputTitle = documentation.concat(" ", projectName);

    return outputTitle;
}

module.exports = OutputTitlePDF;