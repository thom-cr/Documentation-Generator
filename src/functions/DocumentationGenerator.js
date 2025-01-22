import FileParsing from "./FileParsing";
import OutputTitle from "./OutputTitle";
import OutputNameFilePDF from "./OutputNameFilePDF";
import WritePDF from "./WritePDF";

const DocumentationGenerator = async (formData, rows) => {

    const { projectName, formats } = formData;

    const filesParsed = await FileParsing(formData, rows);

    if (formats.pdf) {
        const outputTitle = OutputTitle(projectName);
        const outputNameFilePDF = OutputNameFilePDF(projectName);
        WritePDF(outputTitle, outputNameFilePDF, filesParsed);
    }

    
};

export default DocumentationGenerator;