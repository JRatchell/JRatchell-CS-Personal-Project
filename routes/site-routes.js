//This talks to site-controller.js//
const express = require('express');
const siteController = require('../controllers/site-controller');
const router = express.Router();

// SITE ROUTES
router.route('/')
  .get(siteController.index);

  router.route('/register')
    .get(siteController.register)
    .post(siteController.register_post);

  router.route('/logout')
    .get(siteController.logout);
  
router.route('/about')
  .get(siteController.about);

router.route('/login')
  .get(siteController.login)
  .post(siteController.login_post);

router.route('/create-task')
  .get(siteController.create_task)
  .post(siteController.create_task);

module.exports = router;




























module.exports = router;