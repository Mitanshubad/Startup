const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Internship = mongoose.model("Internship", internshipSchema);

module.exports = Internship;
