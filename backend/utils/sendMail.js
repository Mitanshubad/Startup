const nodemailer = require('nodemailer');

const sendMail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            // configure your email provider here
        });
        await transporter.sendMail({
            from: 'mitanshubadgujar8@email.com',
            to,
            subject,
            text
        });
        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email.');
    }
};

module.exports = sendMail;
