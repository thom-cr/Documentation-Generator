// Doc: Permet d'attraper récursivement les fichiers dans les différents dossiers et sous-dossier

const GetAllFiles = async (directoryHandle, files) => {
    for await (const entry of directoryHandle.values()) {
        if (entry.kind === "file") {
            
            files.push(entry);
        } else if (entry.kind === "directory") {
            
            await GetAllFiles(entry, files);
        }
    }

    return files;
}

module.exports = GetAllFiles;