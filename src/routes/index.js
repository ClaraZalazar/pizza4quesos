const express = require('express');
const { index, search, dashboard } = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', index );
router.get('/search', search); 
router.get('/dashboard', dashboard)

module.exports = router;
