/* const GetAllFiles = require('../functions/GetAllFiles');

describe('GetAllFiles', () => {
    it('should retrieve all files from a directory', async () => {
        const mockFile = { kind: 'file', name: 'file1.txt' };
        const mockDirectory = {
            kind: 'directory',
            values: jest.fn().mockResolvedValue([
                mockFile,
                {
                    kind: 'directory',
                    values: jest.fn().mockResolvedValue([mockFile])
                }
            ])
        };

        const files = [];
        const result = await GetAllFiles(mockDirectory, files);

        expect(result).toEqual([mockFile, mockFile]);
    });

    it('should handle an empty directory', async () => {
        const mockDirectory = {
            kind: 'directory',
            values: jest.fn().mockResolvedValue([])
        };

        const files = [];
        const result = await GetAllFiles(mockDirectory, files);

        expect(result).toEqual([]);
    });

    it('should handle errors gracefully', async () => {
        const mockDirectory = {
            kind: 'directory',
            values: jest.fn().mockRejectedValue('Test error')
        };

        const files = [];
        await expect(GetAllFiles(mockDirectory, files)).rejects.toThrow('Test error');
    });
}); */