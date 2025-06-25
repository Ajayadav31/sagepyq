const { getPyqsByCourseAndYear } = require('../models/pyqModel');

const getPyqsByCourseAndYearContoller = async (req, res) => {
  const { course_id, year } = req.query;

  if (!course_id || !year) {
    return res.status(400).json({ error: 'course_id and year are required' });
  }

  try {
    const result = await getPyqsByCourseAndYear(course_id, year);

    if (!result) {
      return res.status(404).json({ error: 'No papers found' });
    }

    res.json(result); 
  } catch (err) {
    console.error('Error fetching pyqs:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getPyqsByCourseAndYearContoller };

