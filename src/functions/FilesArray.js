const ToArrayExtensions = require("./ToArrayExtensions");
const FilterFiles = require("./FilterFiles");

// Doc: Use to display the files selected by FileSelector or FolderSelector. It updates based on the extensions input.
async function FilesArray (files, extensionsName) {
    if (!extensionsName || typeof extensionsName !== "string" || extensionsName.trim().length === 0) {
        return []; 
    }

    const extensions = ToArrayExtensions(extensionsName);

    return await FilterFiles(files, extensions);
};

module.exports = FilesArray;