const db = require('./db');

// Get all programs for a specific school
const getProgramsBySchool = async (schoolId) => {
  try {
    console.log('Running SQL query for school_id:', schoolId);
    const [results] = await db.query(
      'SELECT id, name FROM programs WHERE school_id = ? ORDER BY name',
      [schoolId]
    );

    console.log('Raw results from DB:', results);

    if (!results || results.length === 0) {
      console.warn('No programs found for school_id:', schoolId);
    }

    return results;
  } catch (err) {
    console.error('DB error:', err);
    throw err;
  }
};

module.exports = { getProgramsBySchool };
