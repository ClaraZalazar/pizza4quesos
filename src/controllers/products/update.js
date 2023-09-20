const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require("../../data");

module.exports = async (req, res) => {
    const products = await readJSON("products.json");
    const id = req.params.id;
    const { country, hotel, flight, description, price, discount } = req.body;

    const productsModify = products.map((product) => {
      if (product.id === id) {
  
        req.file &&
          existsSync(`./public/images/${product.image}`) &&
          unlinkSync(`./public/images/${product.image}`);
  
        product.country = country.trim();
        product.hotel = hotel;
        product.flight = flight;
        product.description = description.trim();
        product.price = +price;
        product.discount = +discount;
        product.updatedAt = new Date();
        product.image = req.file ? req.file.filename : product.image;
      }
  
      return product;
    });

    writeJSON(productsModify, "products.json");

    return res.redirect("/dashboard");
};