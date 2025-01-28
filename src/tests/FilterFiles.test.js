const FilterFiles = require('../functions/FilterFiles');

describe('FilterFiles', () => {
    it('should filter files based on given extensions', async () => {
        const files = [
            {
                name: 'file1.txt',
                getFile: async () => ({ name: 'file1.txt' })
            },
            {
                name: 'file2.js',
                getFile: async () => ({ name: 'file2.js' })
            },
            {
                name: 'file3.md',
                getFile: async () => ({ name: 'file3.md' })
            }
        ];

        const extensions = ['txt', 'js'];

        const expectedOutput = [
            { file: 'file1', extension: 'txt' },
            { file: 'file2', extension: 'js' }
        ];

        const result = await FilterFiles(files, extensions);
        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array if no files match the given extensions', async () => {
        const files = [
            {
                name: 'file1.txt',
                getFile: async () => ({ name: 'file1.txt' })
            },
            {
                name: 'file2.js',
                getFile: async () => ({ name: 'file2.js' })
            }
        ];

        const extensions = ['md'];

        const result = await FilterFiles(files, extensions);
        expect(result).toEqual([]);
    });

    it('should handle errors gracefully', async () => {
        const originalConsoleError = console.error;
        console.error = jest.fn();
        
        const files = [
            {
                name: 'file1.txt',
                getFile: async () => {
                    throw new Error('Test error');
                }
            },
            {
                name: 'file2.js',
                getFile: async () => ({ name: 'file2.js' })
            }
        ];
    
        const extensions = ['js'];
    
        const expectedOutput = [
            { file: 'file2', extension: 'js' }
        ];
    
        const result = await FilterFiles(files, extensions);
        expect(result).toEqual(expectedOutput);
        console.error = originalConsoleError;
    });    
});