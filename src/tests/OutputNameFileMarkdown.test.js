const OutputNameFileMarkdown = require('../functions/OutputNameFileMarkdown');

describe('OutputNameFileMarkdown', () => {
    it('should return the correct title for a given project name', () => {
        const projectName = 'MonProjet';
        const expectedTitle = 'MonProjet.md';
        const result = OutputNameFileMarkdown(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle empty project name', () => {
        const projectName = '';
        const expectedTitle = '.md';
        const result = OutputNameFileMarkdown(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle project name with spaces', () => {
        const projectName = 'Projet Test';
        const expectedTitle = 'Projet Test.md';
        const result = OutputNameFileMarkdown(projectName);
        expect(result).toBe(expectedTitle);
    });

    it('should handle project name with special characters', () => {
        const projectName = 'Projet@123';
        const expectedTitle = 'Projet@123.md';
        const result = OutputNameFileMarkdown(projectName);
        expect(result).toBe(expectedTitle);
    });
});