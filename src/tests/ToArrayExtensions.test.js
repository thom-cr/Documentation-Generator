const ToArrayExtensions = require('../functions/ToArrayExtensions');

describe('ToArrayExtensions', () => {
    it('should convert a comma-separated string to an array', () => {
        const extensionsName = 'js,jsx,c';
        const expectedArray = ['js', 'jsx', 'c'];
        const result = ToArrayExtensions(extensionsName);
        expect(result).toEqual(expectedArray);
    });

    it('should handle a single extension', () => {
        const extensionsName = 'js';
        const expectedArray = ['js'];
        const result = ToArrayExtensions(extensionsName);
        expect(result).toEqual(expectedArray);
    });

    it('should handle an empty string', () => {
        const extensionsName = '';
        const expectedArray = [''];
        const result = ToArrayExtensions(extensionsName);
        expect(result).toEqual(expectedArray);
    });

    it('should handle spaces around commas', () => {
        const extensionsName = 'js, jsx, c';
        const expectedArray = ['js', ' jsx', ' c'];
        const result = ToArrayExtensions(extensionsName);
        expect(result).toEqual(expectedArray);
    });

    it('should handle no commas', () => {
        const extensionsName = 'js jsx c';
        const expectedArray = ['js jsx c'];
        const result = ToArrayExtensions(extensionsName);
        expect(result).toEqual(expectedArray);
    });
});