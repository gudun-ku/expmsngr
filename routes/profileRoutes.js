const express = require('express');
const authController = require('../controllers/authController');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.use(authController.protect);

router.route('/').post(profileController.createProfile);

module.exports = router;
