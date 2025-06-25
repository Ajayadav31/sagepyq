const express = require('express');
const router = express.Router();
const { getCoursesByProgramAndSemesterContoller } = require('../controllers/courseController');

router.get('/courses', getCoursesByProgramAndSemesterContoller);

module.exports = router;
