const express = require('express');
const router = express.Router();
const { getAllSchoolsController } = require('../controllers/schoolController');

// Update route to match the frontend fetch URL
router.get('/schools', getAllSchoolsController);

module.exports = router;
