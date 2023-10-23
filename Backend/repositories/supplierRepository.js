// repositories/supplierRepository.js
// //Repository Pattern has been used for this file
const Supplier = require('../models/supplier');

class SupplierRepository {
  async create(supplierData) {
    const supplier = new Supplier(supplierData);
    return await supplier.save();
  }

  async getAll() {
    return await Supplier.find();
  }

  async getById(id) {
    return await Supplier.findById(id);
  }

  async update(id, updateData) {
    return await Supplier.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    const result = await Supplier.findByIdAndRemove(id);
    return !!result;
  }
}

module.exports = SupplierRepository;
