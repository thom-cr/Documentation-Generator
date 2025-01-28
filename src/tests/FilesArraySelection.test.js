const FilesArraySelection = require('../functions/FilesArraySelection');

describe('FilesArraySelection', () => {
    it('should correctly map files to rows with file names and extensions', () => {
        const files = [
            { name: 'file1.txt' },
            { name: 'file2.js' },
            { name: 'file3' }
        ];

        const expectedOutput = [
            { file: 'file1', extension: 'txt' },
            { file: 'file2', extension: 'js' },
            { file: 'file3', extension: '' }
        ];

        const result = FilesArraySelection(files);
        expect(result).toEqual(expectedOutput);
    });

    it('should handle files with multiple dots in the name', () => {
        const files = [
            { name: 'file.name.with.dots.txt' },
            { name: 'another.file.name.js' }
        ];

        const expectedOutput = [
            { file: 'file.name.with.dots', extension: 'txt' },
            { file: 'another.file.name', extension: 'js' }
        ];

        const result = FilesArraySelection(files);
        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array if no files are provided', () => {
        const files = [];

        const expectedOutput = [];

        const result = FilesArraySelection(files);
        expect(result).toEqual(expectedOutput);
    });
});