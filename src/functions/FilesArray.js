const ToArrayExtensions = require("./ToArrayExtensions");
const FilterFiles = require("./FilterFiles");

// Doc: documentation d'explication de l'affichage des fichiers pris en charge par la generation de la documentation
const FilesArray = async (files, extensionsName) => {
    if (!extensionsName || typeof extensionsName !== "string" || extensionsName.trim().length === 0) {
        return []; 
    }

    const extensions = ToArrayExtensions(extensionsName);

    return await FilterFiles(files, extensions);
};

module.exports = FilesArray;