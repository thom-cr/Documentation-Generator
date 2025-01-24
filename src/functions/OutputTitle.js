const OutputTitle = (projectName) => {
    const documentation = "Documentation de";
    const outputTitle = documentation.concat(" ", projectName);

    return outputTitle;
}

module.exports = OutputTitle;