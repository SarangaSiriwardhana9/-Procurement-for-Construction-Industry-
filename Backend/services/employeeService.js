// services/employeeService.js

const Employee = require('../models/employee');

class EmployeeService {
  async createEmployee(employeeData) {
    try {
      const employee = new Employee(employeeData);
      await employee.save();
      return employee;
    } catch (error) {
      throw error;
    }
  }

  async getSiteManagers() {
    try {
      const siteManagers = await Employee.find({ position: 'Site Manager' }, 'name');
      return siteManagers.map((employee) => employee.name);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmployeeService;
