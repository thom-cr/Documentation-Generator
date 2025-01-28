const FolderSelector = require('../functions/FolderSelector');
const GetAllFiles = require('../functions/GetAllFiles');

jest.mock('../functions/GetAllFiles');

describe('FolderSelector', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should return all files from the selected directory', async () => {
        const mockFiles = [{ kind: 'file', name: 'file1.txt' }];
        const mockDirectoryHandle = { kind: 'directory' };

        window.showDirectoryPicker = jest.fn().mockResolvedValue(mockDirectoryHandle);
        GetAllFiles.mockResolvedValue(mockFiles);

        const result = await FolderSelector();
        expect(result).toEqual(mockFiles);
    });

    it('should return an empty array if an error occurs', async () => {
        const originalConsoleError = console.error;
        console.error = jest.fn();

        window.showDirectoryPicker = jest.fn().mockRejectedValue(new Error('Test error'));

        const result = await FolderSelector();
        expect(result).toEqual([]);

        expect(console.error).toHaveBeenCalledWith(
            "Erreur lors de la sélection du dossier :",
            expect.any(Error)
        );

        console.error = originalConsoleError;
    });
});
