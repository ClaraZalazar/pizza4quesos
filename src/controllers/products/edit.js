const { readJSON } = require("../../data");

module.exports = (req, res) => {
    const products = readJSON("products.json");
    const id = req.params.id;
    const product = products.find((product) => product.id === parseInt(id));
    

    res.render("productEdit", {
        id: id,
        product: product,
        country: product.country,
        hotel: product.hotel,
        flight: product.flight,
        description: product.description,
        price: product.price,
        discount: product.discount,
        image: product.image,
        product: products.sort((a, b) =>
            a.hotel > b.hotel ? 1 : a.hotel < b.hotel ? -1 : 0
        ),
    });
};
