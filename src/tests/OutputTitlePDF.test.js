const OutputTitlePDF = require('../functions/OutputTitlePDF');

describe('OutputTitlePDF', () => {
    it('should return the correct title for a given project name', () => {
        const projectName = 'MonProjet';
        const expectedTitle = 'Documentation de MonProjet';
        const result = OutputTitlePDF(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle empty project name', () => {
        const projectName = '';
        const expectedTitle = 'Documentation de ';
        const result = OutputTitlePDF(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle project name with spaces', () => {
        const projectName = 'Projet Test';
        const expectedTitle = 'Documentation de Projet Test';
        const result = OutputTitlePDF(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle project name with special characters', () => {
        const projectName = 'Projet@123';
        const expectedTitle = 'Documentation de Projet@123';
        const result = OutputTitlePDF(projectName);
        expect(result).toBe(expectedTitle);
    });
});