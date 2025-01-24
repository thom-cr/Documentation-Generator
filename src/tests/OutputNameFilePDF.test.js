const OutputNameFilePDF = require('../functions/OutputNameFilePDF');

describe('OutputNameFilePDF', () => {
    it('should return the correct title for a given project name', () => {
        const projectName = 'MonProjet';
        const expectedTitle = 'MonProjet.pdf';
        const result = OutputNameFilePDF(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle empty project name', () => {
        const projectName = '';
        const expectedTitle = '.pdf';
        const result = OutputNameFilePDF(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle project name with spaces', () => {
        const projectName = 'Projet Test';
        const expectedTitle = 'Projet Test.pdf';
        const result = OutputNameFilePDF(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle project name with special characters', () => {
        const projectName = 'Projet@123';
        const expectedTitle = 'Projet@123.pdf';
        const result = OutputNameFilePDF(projectName);
        expect(result).toBe(expectedTitle);
    });
});