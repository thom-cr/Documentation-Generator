// Doc: Transform extensions string into an array

const ToArrayExtensions = (extensionsName) => {
    const extensions = extensionsName.split(",");
    
    return extensions;
};

module.exports = ToArrayExtensions;