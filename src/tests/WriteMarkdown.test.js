const WriteMarkdown = require('../functions/WriteMarkdown');
const { saveAs } = require('file-saver');

jest.mock('file-saver', () => ({
    saveAs: jest.fn()
}));

describe('WriteMarkdown', () => {
    it('should generate markdown content and save it as a file', () => {
        const outputTitleMarkdown = '# Documentation';
        const outputNameFileMarkdown = 'output.md';
        const filesParsed = [
            {
                name: 'file1',
                functions: [
                    {
                        functionName: 'function1',
                        comments: ['Comment 1', 'Comment 2']
                    }
                ]
            },
            {
                name: 'file2',
                functions: [
                    {
                        functionName: 'function2',
                        comments: ['Comment 3']
                    }
                ]
            }
        ];

        WriteMarkdown(outputTitleMarkdown, outputNameFileMarkdown, filesParsed);

        const expectedContent = `# Documentation
* __file1__ :
   * **Fonction function1** :
     * Comment 1,Comment 2
* __file2__ :
   * **Fonction function2** :
     * Comment 3`;

        expect(saveAs).toHaveBeenCalledWith(
            expect.any(Blob),
            outputNameFileMarkdown
        );

        const blob = saveAs.mock.calls[0][0];
        const reader = new FileReader();
        reader.onload = () => {
            expect(reader.result).toBe(expectedContent);
        };
        reader.readAsText(blob);
    });
});