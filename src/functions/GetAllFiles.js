async function GetAllFiles(directoryHandle, files) {
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