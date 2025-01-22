const OutputNameFilePDF = (projectName) => {
    const nameFile = ".pdf";
    const outputNameFilePDF = projectName.concat(nameFile);

    return outputNameFilePDF;
}

export default OutputNameFilePDF;