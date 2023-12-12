const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const uploadRoutes = require('./routes/uploadRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

connectDB();
app.use(cors()); 
app.use(bodyParser.json());

// Routes
app.use('/', uploadRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
