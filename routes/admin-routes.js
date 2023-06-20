//This file talks to the admin controller//
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/')
.get(adminController.account)

.get(adminController.read_task)
.post(adminController.create_task)
router.route('/:_id')
.post(adminController.delete_task)

.delete(adminController.delete_task)

module.exports = router;