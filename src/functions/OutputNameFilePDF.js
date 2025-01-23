const OutputNameFilePDF = (projectName) => {
    const extension = ".pdf";
    const outputNameFilePDF = projectName.concat(extension);

    return outputNameFilePDF;
}

export default OutputNameFilePDF;