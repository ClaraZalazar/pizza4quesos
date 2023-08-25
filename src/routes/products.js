const express = require('express');
const methodOverride = require('method-override');
const { detail, add, edit, create, update, remove } = require('../controllers/productsController');
const router = express.Router();
const upload = require('../middlewares/upload');

router.use(methodOverride('_method'));

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('productImage'), create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('productImage'), update) // actualización
    .delete('/remove/:id', remove)

module.exports = router;
