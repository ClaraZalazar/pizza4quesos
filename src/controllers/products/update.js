// const { unlinkSync, existsSync } = require("fs");
// const { readJSON, writeJSON } = require("../../data");

// module.exports = (req, res) => {
//   const products = readJSON("products.json");
//   const id = req.params.id;
//   const { country, hotel, flight, description, price, discount } = req.body;

//   const productsModify = products.map((product) => {
//     if (product.id === id) {

//       req.file &&
//         existsSync(`./public/images/${product.image}`) &&
//         unlinkSync(`./public/images/${product.image}`);

//       product.country = country.trim();
//       product.hotel = hotel;
//       product.description = description.trim();
//       product.price = +price;
//       product.discount = +discount;
//       product.createdAt = new Date();
//       product.image = req.file ? req.file.filename : product.image;

//     }

//     return product;
//   });

//   writeJSON(productsModify, "products.json");

//   return res.redirect("/dashboard");
// };

// const { unlinkSync, existsSync } = require("fs");
// const { readJSON, writeJSON } = require("../../data");

// module.exports = async (req, res) => {
//   try {
//     const products = await readJSON("products.json");
//     const id = parseInt(req.params.id);
//     const { country, hotel, flight, description, price, discount } = req.body;
    

//     const productIndex = products.findIndex((product) => product.id === id);

//       // Rest of your code to update the product with the image
//     }

//     if (productIndex === -1) {
//       return res.status(404).send("Product not found");
//     }

//     const product = products[productIndex];

//     if (req.file) {
//       if (existsSync(`./public/images/${product.image}`)) {
//         unlinkSync(`./public/images/${product.image}`);
//       }
//       product.image = req.file.filename;
//       console.log("Uploaded file:", req.file);
//     }

//     product.country = country.trim();
//     product.hotel = hotel;
//     product.flight = flight;
//     product.description = description.trim();
//     product.price = parseFloat(price);
//     product.discount = parseInt(discount);
//     product.updatedAt = new Date();

//     products[productIndex] = product;

//     await writeJSON(products, "products.json");

//     return res.redirect("/dashboard");
//   } catch (error) {
//     console.error("Error updating product:", error);
//     return res.status(500).send("Internal server error");
//   }
// }; del 34-80

const { unlinkSync, existsSync } = require("fs");
const { readJSON, writeJSON } = require("../../data");

module.exports = async (req, res) => {
  try {
    const products = await readJSON("products.json");
    const id = parseInt(req.params.id);
    const { country, hotel, flight, description, price, discount } = req.body;

    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex === -1) {
      return res.status(404).send("Product not found");
    }

    const product = products[productIndex];

    if (req.file) {
      if (existsSync(`./public/images/${product.image}`)) {
        unlinkSync(`./public/images/${product.image}`);
      //   const additionalImages = req.files.map((file) => file.filename);
      // product.additionalImages = additionalImages;
      }
      product.image = req.file.filename;
    }
    if (req.files && req.files.additionalImages) {
      const additionalImages = [];

      // Iterar sobre las imágenes adicionales y guardar los nombres de archivo en el arreglo
      req.files.additionalImages.forEach((file) => {
        additionalImages.push(file.filename);
      });

      // Asignar el arreglo de nombres de archivo a product.additionalImages
      product.additionalImages = additionalImages;
    }

    product.country = country.trim();
    product.hotel = hotel;
    product.flight = flight;
    product.description = description.trim();
    product.price = parseFloat(price);
    product.discount = parseInt(discount);
    product.updatedAt = new Date();

    products[productIndex] = product;

    await writeJSON(products, "products.json");

    return res.redirect("/dashboard");
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).send("Internal server error");
  }
};

