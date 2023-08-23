
module.exports = {
  register: (req, res) => {
    return res.render('register');
  },
  login: (req, res) => {
    return res.render('login');
  },
  shoppingCart: (req, res) => {
    return res.render('shoppingCart');
  }
};
