const ToArrayExtensions = require("./ToArrayExtensions");
const FilterFiles = require("./FilterFiles");

// Doc: fonction permettant l'affichage des fichiers pris en charge par la generation de la documentation
async function FilesArray (files, extensionsName) {
    if (!extensionsName || typeof extensionsName !== "string" || extensionsName.trim().length === 0) {
        return []; 
    }

    const extensions = ToArrayExtensions(extensionsName);

    return await FilterFiles(files, extensions);
};

module.exports = FilesArray;