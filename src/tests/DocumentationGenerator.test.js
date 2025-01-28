const DocumentationGenerator = require('../functions/DocumentationGenerator');
const FileParsing = require('../functions/FileParsing');
const OutputTitle = require('../functions/OutputTitle');
const OutputNameFilePDF = require('../functions/OutputNameFilePDF');
const WritePDF = require('../functions/WritePDF');
const OutputTitleMarkdown = require('../functions/OutputTitleMarkdown');
const OutputNameFileMarkdown = require('../functions/OutputNameFileMarkdown');
const WriteMarkdown = require('../functions/WriteMarkdown');

jest.mock('../functions/FileParsing');
jest.mock('../functions/OutputTitle');
jest.mock('../functions/OutputNameFilePDF');
jest.mock('../functions/WritePDF');
jest.mock('../functions/OutputTitleMarkdown');
jest.mock('../functions/OutputNameFileMarkdown');
jest.mock('../functions/WriteMarkdown');

describe('DocumentationGenerator', () => {
    it('should generate PDF documentation if format is pdf', async () => {
        const formData = {
            projectName: 'TestProject',
            formats: { pdf: true, markdown: false }
        };
        const rows = [];
        const filesParsed = [{ name: 'file1', functions: [] }];

        FileParsing.mockResolvedValue(filesParsed);
        OutputTitle.mockReturnValue('Test Project Documentation');
        OutputNameFilePDF.mockReturnValue('TestProject.pdf');

        await DocumentationGenerator(formData, rows);

        expect(FileParsing).toHaveBeenCalledWith(formData, rows);
        expect(OutputTitle).toHaveBeenCalledWith('TestProject');
        expect(OutputNameFilePDF).toHaveBeenCalledWith('TestProject');
        expect(WritePDF).toHaveBeenCalledWith('Test Project Documentation', 'TestProject.pdf', filesParsed);
    });

    it('should generate Markdown documentation if format is markdown', async () => {
        const formData = {
            projectName: 'TestProject',
            formats: { pdf: false, markdown: true }
        };
        const rows = [];
        const filesParsed = [{ name: 'file1', functions: [] }];

        FileParsing.mockResolvedValue(filesParsed);
        OutputTitleMarkdown.mockReturnValue('Test Project Documentation');
        OutputNameFileMarkdown.mockReturnValue('TestProject.md');

        await DocumentationGenerator(formData, rows);

        expect(FileParsing).toHaveBeenCalledWith(formData, rows);
        expect(OutputTitleMarkdown).toHaveBeenCalledWith('TestProject');
        expect(OutputNameFileMarkdown).toHaveBeenCalledWith('TestProject');
        expect(WriteMarkdown).toHaveBeenCalledWith('Test Project Documentation', 'TestProject.md', filesParsed);
    });

    it('should generate both PDF and Markdown documentation if both formats are specified', async () => {
        const formData = {
            projectName: 'TestProject',
            formats: { pdf: true, markdown: true }
        };
        const rows = [];
        const filesParsed = [{ name: 'file1', functions: [] }];

        FileParsing.mockResolvedValue(filesParsed);
        OutputTitle.mockReturnValue('Test Project Documentation');
        OutputNameFilePDF.mockReturnValue('TestProject.pdf');
        OutputTitleMarkdown.mockReturnValue('Test Project Documentation');
        OutputNameFileMarkdown.mockReturnValue('TestProject.md');

        await DocumentationGenerator(formData, rows);

        expect(FileParsing).toHaveBeenCalledWith(formData, rows);
        expect(OutputTitle).toHaveBeenCalledWith('TestProject');
        expect(OutputNameFilePDF).toHaveBeenCalledWith('TestProject');
        expect(WritePDF).toHaveBeenCalledWith('Test Project Documentation', 'TestProject.pdf', filesParsed);
        expect(OutputTitleMarkdown).toHaveBeenCalledWith('TestProject');
        expect(OutputNameFileMarkdown).toHaveBeenCalledWith('TestProject');
        expect(WriteMarkdown).toHaveBeenCalledWith('Test Project Documentation', 'TestProject.md', filesParsed);
    });

    it('should handle empty formats gracefully', async () => {
        const formData = {
            projectName: 'TestProject',
            formats: {}
        };
        const rows = [];
        const filesParsed = [{ name: 'file1', functions: [] }];

        FileParsing.mockResolvedValue(filesParsed);

        await DocumentationGenerator(formData, rows);

        expect(FileParsing).toHaveBeenCalledWith(formData, rows);
        expect(OutputTitle).not.toHaveBeenCalled();
        expect(OutputNameFilePDF).not.toHaveBeenCalled();
        expect(WritePDF).not.toHaveBeenCalled();
        expect(OutputTitleMarkdown).not.toHaveBeenCalled();
        expect(OutputNameFileMarkdown).not.toHaveBeenCalled();
        expect(WriteMarkdown).not.toHaveBeenCalled();
    });
});