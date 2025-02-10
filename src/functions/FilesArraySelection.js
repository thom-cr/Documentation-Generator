//doc: returns dictionnary with fileName and extensions

const FilesArraySelection = (files) => {
    const rows = files.map((fileEntry) => {
        const splitParts = fileEntry.name.split(".");
        
        if (splitParts.length === 1) {
            return {
                file: fileEntry.name,
                extension: "",
            };
        }

        const extension = splitParts.pop();
        const fileName = splitParts.join(".");
        
        return {
            file: fileName,
            extension: extension,
        };
    });

    return rows;
};

module.exports = FilesArraySelection;