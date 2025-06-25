const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');  // Import path module to handle file paths
const config = require('./config');


// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();  // Ensure this is initialized first

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // Parse incoming JSON requests

// Serve static files (HTML, CSS, JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Optional: Serve index.html as the default page when no route is matched
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Importing routes
const schoolRoutes = require('./routes/schoolRoutes');
const programRoutes = require('./routes/programRoutes');
const courseRoutes = require('./routes/courseRoutes');
const pyqRoutes = require('./routes/pyqRoutes');

// Use the routes
app.use('/api', schoolRoutes);  // This will match /api/schools
app.use('/api', programRoutes);  // This will match /api/programs
app.use('/api', courseRoutes);   // This will match /api/courses
app.use('/api', pyqRoutes);      // This will match /api/pyqs

// Start the server
const port = config.server.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
