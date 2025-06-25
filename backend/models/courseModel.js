const db = require('./db');

// Get all courses for a specific program and semester
const getCoursesByProgramAndSemester = async (programId, semester) => {
  try {
    const query = 'SELECT id, code, name FROM courses WHERE program_id = ? AND semester = ? ORDER BY name';
    
    console.log(`Running SQL query: ${query} with program_id: ${programId}, semester: ${semester}`); // Debug log
    
    // Using async/await with the promise-based query method
    const [results] = await db.query(query, [programId, semester]);

    console.log('Courses found:', results); // Debug log for fetched courses
    return results;
  } catch (err) {
    console.error('DB error:', err); // Log the error if the query fails
    throw new Error('Error fetching courses');
  }
};

module.exports = { getCoursesByProgramAndSemester };
