// doc: Add .pdf at the end of projectName

const OutputNameFilePDF = (projectName) => {
    const extension = ".pdf";
    const outputNameFilePDF = projectName.concat(extension);

    return outputNameFilePDF;
}

module.exports = OutputNameFilePDF;