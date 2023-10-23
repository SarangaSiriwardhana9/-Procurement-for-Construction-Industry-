// routes/employee.js

const express = require('express');
const router = express.Router();
const EmployeeService = require('../services/employeeService');

const employeeService = new EmployeeService();

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const employeeData = req.body;
    const employee = await employeeService.createEmployee(employeeData);
    return res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating the employee' });
  }
});

// Fetch employee names of Site Managers
router.get('/site-managers', async (req, res) => {
  try {
    const siteManagerNames = await employeeService.getSiteManagers();
    res.json(siteManagerNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching site managers' });
  }
});

module.exports = router;
