const { getCoursesByProgramAndSemester } = require('../models/courseModel');

const getCoursesByProgramAndSemesterContoller = async (req, res) => {
  const { program_id, semester } = req.query;

  if (!program_id || !semester) {
    return res.status(400).json({ error: 'program_id and semester are required' });
  }

  try {
    const courses = await getCoursesByProgramAndSemester(program_id, semester);
    res.json(courses);
  } catch (err) {
    console.error('Error fetching courses:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getCoursesByProgramAndSemesterContoller };
