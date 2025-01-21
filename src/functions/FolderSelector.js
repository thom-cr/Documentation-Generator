const FolderSelector = async () => {
    try {
        const directoryHandle = await window.showDirectoryPicker();
        const files = [];

        for await (const entry of directoryHandle.values()) {
            
            if(entry.kind === "file") {
                files.push(entry);
            }
        }
        
        return files;

    } catch (error) {

        console.error("Erreur lors de la sélection du dossier :", error);
        return [];
    }
};

export default FolderSelector;