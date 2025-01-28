const FilterFiles = async (files, extensions) => {
    let filesArray = [];
    let filesArrayResult = [];

    for(const fileHandle of files) {
        const file = await fileHandle.getFile();

        filesArray.push(file.name);
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
};

module.exports = FilterFiles;