const { v4: uuidv4 } = require('uuid');

const Product = function({ country,category, hotel, flight, description, price, discount, image }) {
    this.id = uuidv4();
    this.country = country ? country.trim() : ''; // comprueba y asigna predeterminado
    this.category = category ? category.trim() : ''; // comprueba y asigna predeterminado
    this.hotel = hotel;
    this.flight = flight;
    this.description = description ? description.trim() : ''; // comprueba y asigna predeterminado
    this.price = +price;
    this.discount = +discount; //lo del descuento agregamos la funcion para un futuro cuando lo agregmos a la vista, por ahora no lo tiene
    this.image = image;
    this.createdAt = new Date();
};

module.exports = Product;