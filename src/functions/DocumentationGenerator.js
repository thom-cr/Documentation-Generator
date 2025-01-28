const FileParsing = require('./FileParsing');
const OutputTitle = require('./OutputTitle');
const OutputNameFilePDF = require('./OutputNameFilePDF');
const WritePDF = require('./WritePDF');
const OutputTitleMarkdown = require('./OutputTitleMarkdown');
const OutputNameFileMarkdown = require('./OutputNameFileMarkdown');
const WriteMarkdown = require('./WriteMarkdown');
/* Doc: 
    explication du generateur de documentation
    qui est vraiment super genial
*/
const DocumentationGenerator = async (formData, rows) => {
    const { projectName, formats } = formData;
    const filesParsed = await FileParsing(formData, rows);

    if (formats.pdf) {
        const outputTitle = OutputTitle(projectName);
        const outputNameFilePDF = OutputNameFilePDF(projectName);

        WritePDF(outputTitle, outputNameFilePDF, filesParsed);
    }

    if (formats.markdown) {
        const outputTitle = OutputTitleMarkdown(projectName);
        const outputNameFileMarkdown = OutputNameFileMarkdown(projectName);

        WriteMarkdown(outputTitle, outputNameFileMarkdown, filesParsed);
    }
};

module.exports = DocumentationGenerator;