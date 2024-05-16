const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    highestQualification: {
        type: String,
        enum: ["B.Tech", "BCA", "BE", "M.Tech", "MCA", "Diploma", "BSc"],
        required: true
    },
    country: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: String,
        required: true
    },
    graduationYear: {
        type: Number,
        required: true
    },
    sourceOfAdvertisement: {
        type: String,
        enum: ["Naukri", "Indeed", "Social Media", "LinkedIn", "Instagram", "Job Portal", "Referral"],
        required: true
    },
    agreeToTerms: {
        type: Boolean,
        required: true
    }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
