// doc: ajoute le .pdf a la fin du project Name

const OutputNameFilePDF = (projectName) => {
    const extension = ".pdf";
    const outputNameFilePDF = projectName.concat(extension);

    return outputNameFilePDF;
}

module.exports = OutputNameFilePDF;