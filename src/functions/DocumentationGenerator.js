import FileParsing from "./FileParsing";
import OutputTitle from "./OutputTitle";
import OutputNameFilePDF from "./OutputNameFilePDF";
import WritePDF from "./WritePDF";
import OutputTitleMarkdown from "./OutputTitleMarkdown";
import OutputNameFileMarkdown from "./OutputNameFileMarkdown";
import WriteMarkdown from "./WriteMarkdown";

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