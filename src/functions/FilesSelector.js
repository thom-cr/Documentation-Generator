const FilesSelector = async () => {

    const pickerOptions = {
        multiple: true,
    };

    try {
        const filesHandle = await window.showOpenFilePicker(pickerOptions);
        const files = [];

        for await (const entry of filesHandle.values()) {
            files.push(entry);
        }
        
        return files;

    } catch (error) {

        console.error("Erreur lors de la sélection du dossier :", error);

        return [];
    }
};

export default FilesSelector;