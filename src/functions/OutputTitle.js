//doc: ajoute "Documentation de " au projectName

const OutputTitle = (projectName) => {
    const documentation = "Documentation de";
    const outputTitle = documentation.concat(" ", projectName);

    return outputTitle;
}

module.exports = OutputTitle;