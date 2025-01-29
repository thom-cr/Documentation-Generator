const GetAllFiles = require("../functions/GetAllFiles");

describe("GetAllFiles", () => {
    it("should retrieve all files in a directory", async () => {
        const mockFile1 = { kind: "file", name: "file1.txt" };
        const mockFile2 = { kind: "file", name: "file2.js" };

        const mockDirectory = {
            kind: "directory",
            values: async function* () {
                yield mockFile1;
                yield mockFile2;
            },
        };

        const files = await GetAllFiles(mockDirectory, []);

        expect(files).toEqual([mockFile1, mockFile2]);
    });

    it("should retrieve files from nested directories", async () => {
        const mockFile1 = { kind: "file", name: "file1.txt" };
        const mockFile2 = { kind: "file", name: "file2.js" };
        const mockNestedFile = { kind: "file", name: "nestedFile.md" };

        const mockNestedDirectory = {
            kind: "directory",
            values: async function* () {
                yield mockNestedFile;
            },
        };

        const mockRootDirectory = {
            kind: "directory",
            values: async function* () {
                yield mockFile1;
                yield mockFile2;
                yield mockNestedDirectory;
            },
        };

        const files = await GetAllFiles(mockRootDirectory, []);

        expect(files).toEqual([mockFile1, mockFile2, mockNestedFile]);
    });

    it("should return an empty array if directory is empty", async () => {
        const mockEmptyDirectory = {
            kind: "directory",
            values: async function* () {}, // Empty async generator
        };

        const files = await GetAllFiles(mockEmptyDirectory, []);

        expect(files).toEqual([]);
    });

    it("should handle errors gracefully", async () => {
        const mockFaultyDirectory = {
            kind: "directory",
            values: async function* () {
                throw new Error("Test error");
            },
        };

        await expect(GetAllFiles(mockFaultyDirectory, [])).rejects.toThrow("Test error");
    });
});
