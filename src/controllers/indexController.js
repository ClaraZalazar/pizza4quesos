const {readJSON} = require('../data')
const products = readJSON('products.json');

module.exports = {
    index : (req, res) => {
        return res.render('index', {
          products,
        });
      },
    search: (req, res) => {
      const keywords = req.query.keywords
      const results= products.filter(product => product.country.toLowerCase().includes(keywords.toLowerCase()))
      res.render('results',{
        products,
        results,
        keywords
      })
    },
    dashboard : (req,res) => {

      const products = readJSON('products.json');
      
      return res.render('dashboard', {
          products
      })
  }
}