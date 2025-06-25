const db = require('./db');

// Get all schools
const getAllSchools = async () => {
  const [rows] = await db.query('SELECT id, name FROM schools ORDER BY name');
  return rows;
};

module.exports = { getAllSchools };
