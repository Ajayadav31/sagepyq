const { getAllSchools } = require('../models/schoolModel');

const getAllSchoolsController = (req, res) => {
  getAllSchools()
    .then((schools) => {
      res.json(schools);
    })
    .catch((err) => {
      console.error('Error fetching schools:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    });
};

module.exports = { getAllSchoolsController };

