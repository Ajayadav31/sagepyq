const db = require('./db');

// Get pyqs by course ID and year
const getPyqsByCourseAndYear = async (courseId, year) => {
  try {
    // Fetching papers based on course_id and year
    const [rows] = await db.query(`
      SELECT MST1,MST2,ESE
      FROM pyqs
      WHERE course_id = ? AND year = ?
    `, [courseId, year]);

    console.log('Fetched papers:', rows);  // Log the raw result to check data

    // Initialize the result object with MST1, MST2, and ESE set to null
    const result = {
      MST1: null,
      MST2: null,
      ESE: null
    };

    return rows[0] || { MST1: null, MST2: null, ESE: null };
  } catch (err) {
    console.error('Error in getPyqsByCourseAndYear:', err);
    throw err;  // Throw the error for the controller to catch and handle
  }
};

module.exports = { getPyqsByCourseAndYear };
