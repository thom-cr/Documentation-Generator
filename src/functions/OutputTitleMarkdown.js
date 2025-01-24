const OutputTitleMarkdown = (outputName) => {
    const h1 = "# ";
    const outputTitleMarkdown = h1.concat("Documentation de ", outputName);
    
    return outputTitleMarkdown;
};

module.exports = OutputTitleMarkdown;