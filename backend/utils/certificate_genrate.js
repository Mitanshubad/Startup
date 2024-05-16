const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.generateCertificate = (applicantInfo) => {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('internship_certificate.pdf'));

    doc.fontSize(20).text('Internship Certificate', { align: 'center' });
    doc.fontSize(16).text(`This is to certify that ${applicantInfo.name} has successfully completed the internship program.`);

    // Add more details to the certificate as needed

    doc.end();
};
