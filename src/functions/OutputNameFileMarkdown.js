// doc: Add .md at the end of projectName

const OutputNameFileMarkdown = (projectName) => {
    const extension = ".md";
    const outputNameFileMarkdown = projectName.concat(extension);

    return outputNameFileMarkdown;
}

module.exports = OutputNameFileMarkdown;