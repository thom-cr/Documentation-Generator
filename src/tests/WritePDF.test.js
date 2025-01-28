const WritePDF = require('../functions/WritePDF');
const { jsPDF } = require('jspdf');

jest.mock('jspdf', () => {
    const mockMethods = {
        setFontSize: jest.fn(),
        setFont: jest.fn(),
        text: jest.fn(),
        addPage: jest.fn(),
        splitTextToSize: jest.fn().mockReturnValue([]),
        save: jest.fn()
    };

    const jsPDFMock = jest.fn().mockImplementation(() => mockMethods);
    jsPDFMock.mock.instances = [mockMethods];

    return { jsPDF: jsPDFMock };
});

describe('WritePDF', () => {
    it('should generate a PDF with the correct content', () => {
        const outputTitle = 'Documentation';
        const outputNameFilePDF = 'output.pdf';
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

        WritePDF(outputTitle, outputNameFilePDF, filesParsed);

        const doc = jsPDF.mock.instances[0];

        expect(doc.setFontSize).toHaveBeenCalledWith(22);
        expect(doc.setFont).toHaveBeenCalledWith('Helvetica', 'Bold');
        expect(doc.text).toHaveBeenCalledWith(outputTitle, 10, 20);
        expect(doc.setFontSize).toHaveBeenCalledWith(16);

        expect(doc.text).toHaveBeenCalledWith('- file1 :', 20, 40);
        expect(doc.text).toHaveBeenCalledWith('Fonction function1 : ', 30, 50);
        expect(doc.splitTextToSize).toHaveBeenCalledWith(['Comment 1', 'Comment 2'], 160);

        expect(doc.text).toHaveBeenCalledWith('- file2 :', 20, expect.any(Number));
        expect(doc.text).toHaveBeenCalledWith('Fonction function2 : ', 30, expect.any(Number));
        expect(doc.splitTextToSize).toHaveBeenCalledWith(['Comment 3'], 160);

        expect(doc.save).toHaveBeenCalledWith(outputNameFilePDF);
    });
});
