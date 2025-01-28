//doc: fonction qui retourne un dictionnaire avec le nom du fichier et l'extension

const FilesArraySelection = (files) => {

    const rows = files.map((fileEntry) => {
        const [fileName, ...extParts] = fileEntry.name.split(".");
        const extension = extParts.join(".");
        
        return {
            file: fileName,
            extension: extension || "",
        };
    });

    return rows;
};

module.exports = FilesArraySelection;
