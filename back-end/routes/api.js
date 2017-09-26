'use strict'

// Get dependecies

const express = require('express');
const router = express.Router();
const path = require('path');

const surveyCotroller = require('../controllers/surveyController');

// Routes
router.post('/survey', surveyCotroller.survey);

module.exports = router;