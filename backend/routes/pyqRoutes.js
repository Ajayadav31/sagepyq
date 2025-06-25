const express = require('express');
const router = express.Router();
const { getPyqsByCourseAndYearContoller } = require('../controllers/pyqController');

router.get('/pyqs', getPyqsByCourseAndYearContoller);

module.exports = router;
