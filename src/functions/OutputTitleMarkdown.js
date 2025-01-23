const OutputTitleMarkdown = (outputName) => {
    const h1 = "# ";
    const outputTitleMarkdown = h1.concat("Documentation de ", outputName);
    
    return outputTitleMarkdown;
};

export default OutputTitleMarkdown;