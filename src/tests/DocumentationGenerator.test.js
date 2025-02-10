// tests/DocumentationGenerator.test.js
const DocumentationGenerator = require('../functions/DocumentationGenerator');
const FileParsing = require('../functions/FileParsing');
const OutputTitle = require('../functions/OutputTitlePDF');
const OutputNameFilePDF = require('../functions/OutputNameFilePDF');
const WritePDF = require('../functions/WritePDF');
const OutputTitleMarkdown = require('../functions/OutputTitleMarkdown');
const OutputNameFileMarkdown = require('../functions/OutputNameFileMarkdown');
const WriteMarkdown = require('../functions/WriteMarkdown');

jest.mock('../functions/FileParsing', () => jest.fn());
jest.mock('../functions/OutputTitle', () => jest.fn());
jest.mock('../functions/OutputNameFilePDF', () => jest.fn());
jest.mock('../functions/WritePDF', () => jest.fn());
jest.mock('../functions/OutputTitleMarkdown', () => jest.fn());
jest.mock('../functions/OutputNameFileMarkdown', () => jest.fn());
jest.mock('../functions/WriteMarkdown', () => jest.fn());

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
});
