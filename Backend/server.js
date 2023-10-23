// App.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (make sure you have MongoDB running)
mongoose.connect('mongodb+srv://root:1234@cluster0.ii9xfog.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Enable CORS for all routes (you can configure this as needed)
app.use(cors());

// Configure middleware to parse JSON in the request body
app.use(bodyParser.json());

// Define routes
const employeeRoutes = require('./routes/employee');
const siteRoutes = require('./routes/site');
const ordersRoutes = require('./routes/orders');
const supplierRoutes = require('./routes/supplier'); // Import the supplier routes

// Use routes
app.use('/api/employees', employeeRoutes);
app.use('/api/sites', siteRoutes);
app.use('/api/siteorder', ordersRoutes);
app.use('/api/supplier', supplierRoutes); // Use the supplier routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//