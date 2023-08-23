const {readJSON} = require('../data')

module.exports = {
    index : (req,res) => {

        const products = readJSON('products.json');
        const hotels = readJSON('hotels.json');

        return res.render('index',{
              products,
              hotels,
        })
    },
    dashboard : (req,res) => {

        const products = readJSON('products.json');
        
        return res.render('dashboard', {
            products
        })
    }
}
