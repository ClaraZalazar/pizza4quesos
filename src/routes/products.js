const express = require('express');
const { detail, add, edit, create, update, remove } = require('../controllers/productsController');
const router = express.Router();
const upload = require('../middlewares/upload');
const productAddValidator = require('../validations/productAddValidator');


router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('productImage'), productAddValidator, create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('productImage'), update) // actualización
    .delete('/remove/:id', remove)

module.exports = router;
