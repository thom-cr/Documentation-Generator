const FileParsing = require('./FileParsing');
const OutputTitlePDF = require('./OutputTitlePDF');
const OutputNameFilePDF = require('./OutputNameFilePDF');
const WritePDF = require('./WritePDF');
const OutputTitleMarkdown = require('./OutputTitleMarkdown');
const OutputNameFileMarkdown = require('./OutputNameFileMarkdown');
const WriteMarkdown = require('./WriteMarkdown');

/* Doc: 
    Function called by DocumentationGenerator component to generate output file (PDF and/or MD) with the help of
    WritePDF and WriteMarkdown
*/
const DocumentationGenerator = async (formData, rows) => {
    const { projectName, formats } = formData;
    const filesParsed = await FileParsing(formData, rows);

    if (formats.pdf) {
        const outputTitle = OutputTitlePDF(projectName);
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