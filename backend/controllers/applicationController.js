// In applicationController.js
const Application = require('../models/Application');
const sendMail = require('../utils/sendMail');
const generateCertificate = require('../utils/generateCertificate');

exports.submitApplication = async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        // Send confirmation email for application submission
        await sendMail(newApplication.email, 'Application Submitted', 'Your internship application has been submitted successfully.');
        res.status(200).send('Application submitted successfully.');
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.submitAssignment = async (req, res) => {
    try {
        // Assuming you have logic here to validate and save the assignment
        // You can also send a confirmation email to the applicant

        // Generate and send certificate
        const applicantInfo = req.body; // Assuming applicant info is sent in the request body
        const certificateFilePath = generateCertificate(applicantInfo);
        await sendMail(applicantInfo.email, 'Internship Certificate', 'Congratulations! Here is your internship certificate.', certificateFilePath);

        res.status(200).send('Assignment submitted successfully.');
    } catch (error) {
        console.error('Error submitting assignment:', error);
        res.status(500).send('Internal Server Error');
    }
};
