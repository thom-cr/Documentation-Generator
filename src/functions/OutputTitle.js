const OutputTitle = (projectName) => {
    const documentation = "Documentation de ";
    const outputTitle = documentation.concat(" ", projectName);

    return outputTitle;
}

export default OutputTitle;