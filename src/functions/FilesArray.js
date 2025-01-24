import ToArrayExtensions from "./ToArrayExtensions";
import FilterFiles from "./FilterFiles";

const FilesArray = async (files, extensionsName) => {

    if (extensionsName !== undefined) {
        const extensions = ToArrayExtensions(extensionsName);
        const filesFiltered = await FilterFiles(files, extensions);
        const rows = filesFiltered;

        console.log('Extensions : ', extensions);

        return rows;
    }
};

module.exports = FilesArray;