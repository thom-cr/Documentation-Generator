const FilesSelector = require('../functions/FilesSelector');

describe('FilesSelector', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

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
        const originalConsoleError = console.error;
        console.error = jest.fn();

        window.showOpenFilePicker = jest.fn().mockRejectedValue(new Error('Test error'));

        const result = await FilesSelector();
        expect(result).toEqual([]);

        expect(console.error).toHaveBeenCalledWith(
            "Erreur lors de la sélection du dossier :",
            expect.any(Error)
        );

        console.error = originalConsoleError;
    });
});
