// doc: Cette fonction filre les fichiers selon les extensions choisis et renvoie le tableau des fichiers filtres

const FilterFiles = async (files, extensions) => {
    let filesArray = [];
    let filesArrayResult = [];

    for (const fileHandle of files) {
        try {
            const file = await fileHandle.getFile();
            filesArray.push(file.name);
        } catch (error) {
            console.error(`Error retrieving file: ${error.message || error}`);
            continue;
        }
    }

    for (let i = 0; i < filesArray.length; i++) {
        const [fileName, ...extParts] = filesArray[i].split(".");
        const extension = extParts.join(".");

        for (let j = 0; j < extensions.length; j++) {
            if (extParts.join(".") === extensions[j]) {
                filesArrayResult.push({ file: fileName, extension: extension || "" });
            }
        }
    }

    return filesArrayResult;
};

module.exports = FilterFiles;
