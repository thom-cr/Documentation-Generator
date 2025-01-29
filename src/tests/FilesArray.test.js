const FilesArray = require("../functions/FilesArray");
const ToArrayExtensions = require("../functions/ToArrayExtensions");
const FilterFiles = require("../functions/FilterFiles");

jest.mock("../functions/ToArrayExtensions");
jest.mock("../functions/FilterFiles");

describe("FilesArray Function", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should call ToArrayExtensions and FilterFiles when extensionsName is valid", async () => {
        const mockFiles = [{ name: "file1.txt" }, { name: "file2.js" }];
        const mockExtensionsName = "txt,js";
        const mockExtensions = ["txt", "js"];
        const mockFilteredFiles = [{ file: "file1", extension: "txt" }, { file: "file2", extension: "js" }];

        ToArrayExtensions.mockReturnValue(mockExtensions);
        FilterFiles.mockResolvedValue(mockFilteredFiles);

        const result = await FilesArray(mockFiles, mockExtensionsName);

        expect(ToArrayExtensions).toHaveBeenCalledWith(mockExtensionsName);
        expect(FilterFiles).toHaveBeenCalledWith(mockFiles, mockExtensions);
        expect(result).toEqual(mockFilteredFiles);
    });

    it("should return an empty array if extensionsName is undefined", async () => {
        const mockFiles = [{ name: "file1.txt" }, { name: "file2.js" }];

        const result = await FilesArray(mockFiles, undefined);

        expect(result).toEqual([]);
        expect(ToArrayExtensions).not.toHaveBeenCalled();
        expect(FilterFiles).not.toHaveBeenCalled();
    });

    it("should return an empty array if extensionsName is null", async () => {
        const mockFiles = [{ name: "file1.txt" }, { name: "file2.js" }];

        const result = await FilesArray(mockFiles, null);

        expect(result).toEqual([]);
        expect(ToArrayExtensions).not.toHaveBeenCalled();
        expect(FilterFiles).not.toHaveBeenCalled();
    });

    it("should return an empty array if extensionsName is an empty string", async () => {
        const mockFiles = [{ name: "file1.txt" }, { name: "file2.js" }];

        const result = await FilesArray(mockFiles, "");

        expect(result).toEqual([]);
        expect(ToArrayExtensions).not.toHaveBeenCalled();
        expect(FilterFiles).not.toHaveBeenCalled();
    });

    it("should return an empty array if extensionsName contains only whitespace", async () => {
        const mockFiles = [{ name: "file1.txt" }, { name: "file2.js" }];

        const result = await FilesArray(mockFiles, "   ");

        expect(result).toEqual([]);
        expect(ToArrayExtensions).not.toHaveBeenCalled();
        expect(FilterFiles).not.toHaveBeenCalled();
    });

    it("should return an empty array if no files match the given extensions", async () => {
        const mockFiles = [{ name: "file1.txt" }, { name: "file2.js" }];
        const mockExtensionsName = "md";
        const mockExtensions = ["md"];

        ToArrayExtensions.mockReturnValue(mockExtensions);
        FilterFiles.mockResolvedValue([]);

        const result = await FilesArray(mockFiles, mockExtensionsName);

        expect(ToArrayExtensions).toHaveBeenCalledWith(mockExtensionsName);
        expect(FilterFiles).toHaveBeenCalledWith(mockFiles, mockExtensions);
        expect(result).toEqual([]);
    });
});
