// backend/models/employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  mobileNo: String,
  email: String,
  position: String,
  salary: Number,
});

module.exports = mongoose.model('Employee', EmployeeSchema);
