const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

const { home } = require('../controllers/home_controller');

router.get('/', homeController.home);
//router.use('/todo', require('./todo'));


console.log('router loaded');

module.exports = router;