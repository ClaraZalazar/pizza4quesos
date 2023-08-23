const express = require('express');
const { register, shoppingCart, login } = require('../controllers/usersController');
const router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login', login);
router.get('/shoppingCart', shoppingCart);

module.exports = router;
