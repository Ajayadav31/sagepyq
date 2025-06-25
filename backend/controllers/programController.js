const { getProgramsBySchool } = require('../models/programModel');

const getProgramsBySchoolContoller = (req, res) => {
  const schoolId = req.query.school_id;
  console.log('Controller called with schoolId:', schoolId); // ✅ log

  if (!schoolId) {
    return res.status(400).json({ error: 'school_id is required' });
  }

  getProgramsBySchool(schoolId)
    .then((programs) => {
      res.json(programs);
    })
    .catch((err) => {
      console.error('Error fetching programs:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    });
};

module.exports = { getProgramsBySchoolContoller };
