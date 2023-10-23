// services/siteService.js

const Site = require('../models/site');

class SiteService {
  async createSite(siteData) {
    try {
      const site = new Site(siteData);
      await site.save();
      return site;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SiteService;
