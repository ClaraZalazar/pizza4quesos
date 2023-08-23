const { readJSON } = require("../../data");

module.exports = (req, res) => {
    const hotels = readJSON("hotels.json");

    return res.render("productAdd", {
      hotels: hotels.sort((a, b) =>
        a.hotel > b.hotel ? 1 : a.hotel < b.hotel ? -1 : 0
      ),
    });
  }