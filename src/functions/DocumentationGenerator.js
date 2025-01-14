import ToArrayExtensions from "./ToArrayExtensions";

const DocumentationGenerator = (formData) => {
    console.log('Données reçues :', formData);

    const { files, formats, extensionsName } = formData;
    const extensions = ToArrayExtensions(extensionsName);

    files.forEach(async (fileHandle, index) => {
        try {
            const file = await fileHandle.getFile();
            console.log(`Fichier ${index + 1}:`, file.name);
        } catch (error) {
            console.error(`Erreur avec le fichier ${index + 1}:`, error);
        }
    });

    console.log('Formats choisis :', formats.pdf ? 'PDF' : '', formats.markdown ? 'Markdown' : '');

    console.log('Extensions : ', extensions);
}

export default DocumentationGenerator;