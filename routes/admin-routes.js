//This file talks to the admin controller//
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/')
.get(adminController.account);

module.exports = router;