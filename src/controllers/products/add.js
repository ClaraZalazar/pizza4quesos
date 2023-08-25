const { readJSON } = require("../../data");

module.exports = (req, res) => {
    const products = readJSON("products.json");

    return res.render("productAdd", {
        products: products.sort((a, b) =>
        a.hotel > b.hotel ? 1 : a.hotel < b.hotel ? -1 : 0
      ),
    });
  }