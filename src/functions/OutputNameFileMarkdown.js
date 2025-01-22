const OutputNameFileMarkdown = (projectName) => {
    const nameFile = ".md";
    const outputNameFileMarkdown = projectName.concat(nameFile);

    return outputNameFileMarkdown;
}

export default OutputNameFileMarkdown;