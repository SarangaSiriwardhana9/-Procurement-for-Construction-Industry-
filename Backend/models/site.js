const mongoose = require('mongoose');

const SiteSchema = new mongoose.Schema({
  siteName: String,
  address: String,
  startDate: Date,
  endDate: Date,
  estimatePrice: Number,
  siteManager: String,
});

module.exports = mongoose.model('Site', SiteSchema);
