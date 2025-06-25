const express = require('express');
const router = express.Router();
const { getProgramsBySchoolContoller } = require('../controllers/programController');

router.get('/programs', getProgramsBySchoolContoller);

module.exports = router;
