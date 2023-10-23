const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  suppliername: {
    type: String,
    required: true,
  },
  supplieremail: {
    type: String,
    required: true,
  },
  suppliercontact: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Supplier", supplierSchema);
