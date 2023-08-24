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
    .post('/add', upload.single('productImage'), create)
    .get('/edit/:id', edit)
      
    // .put('/update/:id', upload.fields([
    //     { name: 'productImage', maxCount: 1 },
    //     { name: 'additionalImages', maxCount: 10 } // Ajusta el número máximo según tus necesidades
    // ]), update);


    .put('/update/:id', upload.single('productImage'), update) // actualización
    .put('/update/:id', upload.fields('additionalImages'), update)
    .delete('/remove/:id', remove)


module.exports = router;









