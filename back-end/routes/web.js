'use strict'
// Get dependencies
const express = require('express');
const router = express.Router();
const path = require('path');

const webController = require('../controllers/homeController');

// Routes
router.get('/', webController.home);

module.exports = router;