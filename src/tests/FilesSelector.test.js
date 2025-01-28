const FilesSelector = require('../functions/FilesSelector');

describe('FilesSelector', () => {
    it('should return selected files', async () => {
        const mockFilesHandle = [
            { name: 'file1.txt' },
            { name: 'file2.js' }
        ];

        window.showOpenFilePicker = jest.fn().mockResolvedValue(mockFilesHandle);

        const result = await FilesSelector();
        expect(result).toEqual(mockFilesHandle);
    });

    it('should return an empty array if an error occurs', async () => {
        window.showOpenFilePicker = jest.fn().mockRejectedValue(new Error('Test error'));

        const result = await FilesSelector();
        expect(result).toEqual([]);
    });
});