const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Route for submitting internship application
router.post('/', applicationController.submitApplication);

// Route for submitting internship assignment
router.post('/submit-assignment', applicationController.submitAssignment);

module.exports = router;
