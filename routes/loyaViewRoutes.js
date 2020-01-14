const express = require('express');
const authController = require('../controllers/authController');
const loyaViewController = require('../controllers/loyaViewController');

const router = express.Router();

router.get('/balance', authController.loyaLogin, loyaViewController.balance);

module.exports = router;
