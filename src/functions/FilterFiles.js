const FilterFiles = async (files, extensions) => {
    let filesArray = [];
    let filesArrayResult = [];

    for(const fileHandle of files) {
        try {
            const file = await fileHandle.getFile();

            filesArray.push(file.name);
        } catch (error) {

            console.error(`Erreur avec le fichier :`, error);
        }
    }

    for(let i = 0; i < filesArray.length; i++) {
        const [fileName, ...extParts] = filesArray[i].split('.');
        const extension = extParts.join('.');

        for(let j = 0; j < extensions.length; j++) {

            if(extParts == extensions[j]) {

                filesArrayResult.push({ file: fileName, extension: extension || "" });
                break;
            }
            else {

                continue;
            }
        }
    }

    return filesArrayResult;
}

export default FilterFiles;