const OutputName = (projectName) => {
    const documentation = "Documentation de ";
    const outputName = documentation.concat(" ", projectName);

    return outputName;
}

export default OutputName;