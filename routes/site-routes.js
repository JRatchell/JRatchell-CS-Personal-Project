//This talks to site-controller.js//
const express = require('express');
const siteCtrl = require('../controller/site-controller');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteCtrl.index);

module.exports = router;