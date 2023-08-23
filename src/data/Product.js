const { v4: uuidv4 } = require('uuid');

const Product = function({ country, hotel, flight, description, price, discount, image }) {
    this.id = uuidv4();
    this.place = country.trim();
    this.hotel = hotel;
    this.flight = flight;
    this.description = description.trim();
    this.price = +price;
    this.discount = +discount;
    this.image = image;
    this.createdAt = new Date();
};

module.exports = Product;
