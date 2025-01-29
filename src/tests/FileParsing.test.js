const FileParsing = require("../functions/FileParsing");

describe("FileParsing", () => {
    it("should correctly assign comments to the first function", async () => {
        const formData = {
            files: [
                {
                    name: "testFile.js",
                    getFile: async () => ({
                        text: async () => `
                            // Doc: This function is awesome
                            const awesomeFunction = () => {};
                        `,
                    }),
                },
            ],
        };

        const rows = [{ file: "testFile" }];

        const expectedOutput = [
            {
                name: "testFile",
                functions: [
                    {
                        functionName: "awesomeFunction",
                        comments: ["This function is awesome"],
                    },
                ],
            },
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it("should correctly assign block comments (/* Doc: */) to the next function", async () => {
        const formData = {
            files: [
                {
                    name: "testFile.js",
                    getFile: async () => ({
                        text: async () => `
                            /* Doc: 
                                This function does something really cool.
                                It should be documented properly.
                            */
                            const coolFunction = () => {};
                        `,
                    }),
                },
            ],
        };

        const rows = [{ file: "testFile" }];

        const expectedOutput = [
            {
                name: "testFile",
                functions: [
                    {
                        functionName: "coolFunction",
                        comments: ["This function does something really cool. It should be documented properly."],
                    },
                ],
            },
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it("should include a default empty function when no valid functions exist", async () => {
        const formData = {
            files: [
                {
                    name: "testFile.js",
                    getFile: async () => ({
                        text: async () => `
                            const noCommentFunction = () => {}; // No comment above, should be ignored
                        `,
                    }),
                },
            ],
        };

        const rows = [{ file: "testFile" }];

        const expectedOutput = [
            {
                name: "testFile",
                functions: [
                    {
                        functionName: "",
                        comments: [],
                    },
                ],
            },
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it("should correctly handle multiple functions with their respective comments", async () => {
        const formData = {
            files: [
                {
                    name: "multiFunctionFile.js",
                    getFile: async () => ({
                        text: async () => `
                            // Doc: First function comment
                            const firstFunction = () => {};

                            /* Doc: Second function comment */
                            const secondFunction = () => {};
                        `,
                    }),
                },
            ],
        };

        const rows = [{ file: "multiFunctionFile" }];

        const expectedOutput = [
            {
                name: "multiFunctionFile",
                functions: [
                    {
                        functionName: "firstFunction",
                        comments: ["First function comment"],
                    },
                ],
            },
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it("should always return an empty function object if no comments are found", async () => {
        const formData = {
            files: [
                {
                    name: "emptyFile.js",
                    getFile: async () => ({
                        text: async () => "",
                    }),
                },
            ],
        };

        const rows = [{ file: "emptyFile" }];

        const expectedOutput = [
            {
                name: "emptyFile",
                functions: [
                    {
                        functionName: "",
                        comments: [],
                    },
                ],
            },
        ];

        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it("should correctly handle different variations of 'Doc:' case-insensitively", async () => {
        const formData = {
            files: [
                {
                    name: "testFile.js",
                    getFile: async () => ({
                        text: async () => `
                            // doc: lowercase comment
                            const lowercaseFunction = () => {};
    
                            // Doc: Uppercase comment
                            const uppercaseFunction = () => {};
                        `,
                    }),
                },
            ],
        };
    
        const rows = [{ file: "testFile" }];
    
        const expectedOutput = [
            {
                name: "testFile",
                functions: [
                    {
                        functionName: "lowercaseFunction",
                        comments: ["lowercase comment"],
                    },
                    {
                        functionName: "uppercaseFunction",
                        comments: ["Uppercase comment"],
                    },
                ],
            },
        ];
    
        const result = await FileParsing(formData, rows);
        expect(result).toEqual(expectedOutput);
    });

    it("should handle missing or invalid input gracefully", async () => {
        const result1 = await FileParsing(null, []);
        const result2 = await FileParsing({ files: null }, []);
        const result3 = await FileParsing({ files: [] }, null);

        expect(result1).toEqual([]);
        expect(result2).toEqual([]);
        expect(result3).toEqual([]);
    });
});
