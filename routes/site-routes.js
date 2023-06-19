//This talks to site-controller.js//
const express = require('express');
const siteCtrl = require('../controllers/site-controller');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteCtrl.index);

module.exports = router;