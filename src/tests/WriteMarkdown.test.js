const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const WriteMarkdown = require('../functions/WriteMarkdown');

jest.mock('file-saver', () => ({
    saveAs: jest.fn(),
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
                        comments: ['Comment 1', 'Comment 2'],
                    },
                ],
            },
            {
                name: 'file2',
                functions: [
                    {
                        functionName: 'function2',
                        comments: ['Comment 3'],
                    },
                ],
            },
        ];

        // Expected Markdown content
        const expectedContent = [
            '# Documentation',
            '* __file1__ :',
            '   * **Fonction function1** :',
            '     * Comment 1,Comment 2',
            '* __file2__ :',
            '   * **Fonction function2** :',
            '     * Comment 3',
        ].join('\n');

        const originalBlob = global.Blob;
        let capturedBlobContent = null;

        global.Blob = class MockBlob {
            constructor(content) {
                capturedBlobContent = content;
            }
        };

        const { saveAs } = require('file-saver');

        WriteMarkdown(outputTitleMarkdown, outputNameFileMarkdown, filesParsed);

        global.Blob = originalBlob;

        expect(saveAs).toHaveBeenCalledTimes(1);
        expect(saveAs.mock.calls[0][1]).toBe(outputNameFileMarkdown);

        const blobContent = capturedBlobContent[0];
        const textContent = typeof blobContent === 'string' 
            ? blobContent 
            : new TextDecoder().decode(new Uint8Array(blobContent));

        expect(textContent).toBe(expectedContent);
    });
});
