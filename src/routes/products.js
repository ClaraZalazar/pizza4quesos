const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

const { detail, add, edit, create, update, remove } = require('../controllers/productsController');
const upload = require('../middlewares/upload');

/* /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', upload.single('image'), create)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('image'), update) // actualización
    .delete('/remove/:id', remove)

module.exports = router;








