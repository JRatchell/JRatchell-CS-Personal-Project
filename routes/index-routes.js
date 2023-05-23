//Entry point for app.js//
const express = require('express');
const siteRouter = require('./site-routes');

const router = express.Router();

router.use('/', siteRouter);

module.exports = router; 