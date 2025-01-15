import ToArrayExtensions from "./ToArrayExtensions";
import FilterFiles from "./FilterFiles";

const FilesArray = async (files, extensionsName) => {
    if (extensionsName !== undefined) {
        const extensions = ToArrayExtensions(extensionsName);
        
        console.log('Extensions : ', extensions);

        const filesFiltered = await FilterFiles(files, extensions);
        const rows = filesFiltered;
        
        return rows;
    }
};

export default FilesArray;