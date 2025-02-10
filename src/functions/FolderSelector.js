const GetAllFiles = require("./GetAllFiles");

// doc: Used to select a folder
const FolderSelector = async () => {
    try {
        const directoryHandle = await window.showDirectoryPicker();
        let files = [];

        files = await GetAllFiles(directoryHandle, files);
        
        return files;
    } catch (error) {
        console.error("Erreur lors de la sélection du dossier :", error);
        
        return [];
    }
};

module.exports = FolderSelector;