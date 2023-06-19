//Entry point for app.js//
const express = require('express');
const siteRouter = require('./site-routes');
const adminRouter = require('./admin-routes')
const router = express.Router();

router.use('/', siteRouter);
router.use('/account', adminRouter);

module.exports = router; 