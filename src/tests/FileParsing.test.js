const FileParsing = require('../functions/FileParsing');

describe('FileParsing', () => {
    it('should parse files and extract comments correctly', async () => {
        const formData = {
            files: [
                {
                    name: 'testFile.js',
                    getFile: async () => ({
                        text: async () => `
                            //doc: This is a test comment
                            const testFunction = () => {};
                            /*doc: This is another test comment */
                        `
                    })
                }
            ]
        };

        const rows = [
            { file: 'testFile' }
        ];

        const expectedOutput = [
            {
                name: 'testFile',
                functions: [
                    {
                        functionName: 'testFunction',
                        comments: [
                            'This is a test comment',
                            'This is another test comment'
                        ]
                    }
                ]
            }
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array if no matching files are found', async () => {
        const formData = {
            files: [
                {
                    name: 'nonMatchingFile.js',
                    getFile: async () => ({
                        text: async () => ``
                    })
                }
            ]
        };

        const rows = [
            { file: 'testFile' }
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual([]);
    });

    it('should handle different comment formats correctly', async () => {
        const formData = {
            files: [
                {
                    name: 'testFile.js',
                    getFile: async () => ({
                        text: async () => `
                            // Doc: Line comment with space
                            /*Doc: Block comment with space */
                            //doc: Line comment without space
                            /*doc: Block comment without space */
                            const anotherFunction = () => {};
                        `
                    })
                }
            ]
        };

        const rows = [
            { file: 'testFile' }
        ];

        const expectedOutput = [
            {
                name: 'testFile',
                functions: [
                    {
                        functionName: 'anotherFunction',
                        comments: [
                            'Line comment with space',
                            'Block comment with space',
                            'Line comment without space',
                            'Block comment without space'
                        ]
                    }
                ]
            }
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it('should handle multiple functions in a single file', async () => {
        const formData = {
            files: [
                {
                    name: 'multiFunctionFile.js',
                    getFile: async () => ({
                        text: async () => `
                            //doc: Comment for first function
                            const firstFunction = () => {};
                            //doc: Comment for second function
                            const secondFunction = () => {};
                        `
                    })
                }
            ]
        };

        const rows = [
            { file: 'multiFunctionFile' }
        ];

        const expectedOutput = [
            {
                name: 'multiFunctionFile',
                functions: [
                    {
                        functionName: 'firstFunction',
                        comments: ['Comment for first function']
                    },
                    {
                        functionName: 'secondFunction',
                        comments: ['Comment for second function']
                    }
                ]
            }
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });
});