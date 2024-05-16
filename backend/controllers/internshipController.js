const Internship = require('../models/Internship');
const sendMail = require('../utils/sendMail');

exports.applyForInternship = async (req, res) => {
    try {
        const internshipId = req.params.internshipId;
        // Assuming you have the user's email in req.body.email after authentication
        const userEmail = req.body.email;
        // Send offer letter email
        await sendMail(userEmail, 'Offer Letter', 'Congratulations! You have been selected for the internship.');
        res.status(200).send('Offer letter sent successfully.');
    } catch (error) {
        console.error('Error applying for internship:', error);
        res.status(500).send('Internal Server Error');
    }
};
