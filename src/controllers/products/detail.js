const { readJSON } = require("../../data");

module.exports = (req, res) => {
    
    const products = readJSON("products.json");

    const id = parseInt(req.params.id); // Convierte el id de la URL a número
    const product = products.find((product) => product.id === id);

    return res.render("productDetail", {
      product,
    });
};



//     const id = req.params.id;
//     const product = products.find((product) => product.id === id);

//     return res.render("productDetail", {
//       product,
//     });
//   }

//     const id = parseInt(req.params.id); // Convierte el id de la URL a número
//     const product = products.find((product) => product.id === id);

//     return res.render("productDetail", {
//       product,
//     });
// };

