// routes/site.js

const express = require('express');
const router = express.Router();
const SiteService = require('../services/siteService');

const siteService = new SiteService();

// Create a new site
router.post('/', async (req, res) => {
  try {
    const siteData = req.body;
    const site = await siteService.createSite(siteData);
    return res.status(201).json(site);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error creating the site' });
  }
});

module.exports = router;
