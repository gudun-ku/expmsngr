const express = require('express');
const authController = require('../controllers/authController');
const profileController = require('../controllers/profileController');
const emailProfileController = require('../controllers/emailProfileController');
const smsProfileController = require('../controllers/smsProfileController');

const router = express.Router();

router.use(authController.protect);

router.route('/organization').post(profileController.createProfile);

router.route('/email').post(emailProfileController.createProfile);

router.route('/sms').post(smsProfileController.createProfile);

module.exports = router;
