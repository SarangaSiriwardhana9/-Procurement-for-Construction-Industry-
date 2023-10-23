// routes/supplier.js
//Repository Pattern has been used for this file

const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplier');
const SupplierRepository = require('../repositories/supplierRepository');

const supplierRepository = new SupplierRepository();

// Create a new supplier
router.post('/create', async (req, res) => {
  try {
    const { suppliername, supplieremail, suppliercontact } = req.body;
    const newSupplier = await supplierRepository.create({ suppliername, supplieremail, suppliercontact });
    res.status(201).json(newSupplier);
  } catch (error) {
    handleErrors(res, error);
  }
});

// Get a list of all suppliers
router.get('/list', async (req, res) => {
  try {
    const suppliers = await supplierRepository.getAll();
    res.status(200).json(suppliers);
  } catch (error) {
    handleErrors(res, error);
  }
});

// Get details of a specific supplier by ID
router.get('/details/:id', async (req, res) => {
  try {
    const supplier = await supplierRepository.getById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.status(200).json(supplier);
  } catch (error) {
    handleErrors(res, error);
  }
});

// Update a supplier by ID
router.put('/update/:id', async (req, res) => {
  try {
    const updatedSupplier = await supplierRepository.update(req.params.id, req.body);
    res.status(200).json(updatedSupplier);
  } catch (error) {
    handleErrors(res, error);
  }
});

// Delete a supplier by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const success = await supplierRepository.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Supplier not found' });
    }
    res.status(204).json(); // No content
  } catch (error) {
    handleErrors(res, error);
  }
});

module.exports = router;
