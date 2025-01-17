const FileParsing = async (formData, rows) => {
    const { files, commentPattern } = formData;
    console.log("Comment pattern :", commentPattern);
    for (let i = 0; i < files.length; i++) {
        const [fileName] = files[i].name.split(".");
        for (let j = 0; j < rows.length; j++) {
            if (fileName == rows[j].file) {
                const file = await files[i].getFile();
                const content = await file.text();
                console.log("Fichier :", fileName);
                console.log("Contenu :", content);
            }
        }
    }
}

export default FileParsing;