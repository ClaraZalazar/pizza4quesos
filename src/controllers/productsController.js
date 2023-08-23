// module.exports = {
//   productDetail: (req, res) => {
//     return res.render('productDetail');
//   },
//   productAdd: (req, res) => {
//     return res.render('ProductAdd');
//   },
//   productEdit: (req, res) => {
//     return res.render('productEdit');
//   }
// };


module.exports = {
  detail: require('./products/detail'),
  add: require('./products/add'),
  create: require('./products/create'),
  edit: require('./products/edit'),
  update : require('./products/update'),
  remove : require('./products/remove')
};

