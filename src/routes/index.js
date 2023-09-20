const express = require('express');
const { index, search, dashboard, vuelos } = require('../controllers/indexController');
const checkAdmin = require('../middlewares/checkAdmin');
const router = express.Router();

/* GET home page. */
router.get('/', index );
router.get('/search', search); 
router.get('/dashboard',checkAdmin,dashboard)
router.get('/vuelos', vuelos)

module.exports = router;
