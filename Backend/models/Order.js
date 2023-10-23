const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  managername: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  contact: {
    type: String,
    
  },
  siteaddress: {
    type: String,
    
  },
  sitename: {
    type: String,
    
  },
  deadline: {
    type: String,
    
  },
  suppliers: {
    type: String,
    
  },
  items: [
    {
      itemName: String,
      quantity: String,
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("siteorder", orderSchema);
