const OutputNameFileMarkdown = (projectName) => {
    const extension = ".md";
    const outputNameFileMarkdown = projectName.concat(extension);

    return outputNameFileMarkdown;
}

module.exports = OutputNameFileMarkdown;