const { readJSON, writeJSON } = require("../../data");
 const multer = require('multer');
 const path = require('path');

  const storage = multer.diskStorage({
       destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', 'public', 'images', 'users'));
       },
       filename: function (req, file, cb) {
           cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
       }
   });

 const upload = multer({ storage });

     module.exports = (req, res) => {
     const users = readJSON('users.json');
     const { 
         name, 
         surname, 
         birthday, 
         genero, 
         asiento, 
         suscripcion, 
         profilePicture 
     } = req.body;

     const updatedUser = users.map(user => {
          if (user.id === req.session.userLogin.id) {
        
             return {
                 ...user,
                 name: name ? name.trim() : name,
                 surname: surname ? surname.trim() : surname,
                 birthday: birthday || birthday,
                 genero: genero || genero,
                 asiento: asiento || asiento,
                 suscripcion: suscripcion || suscripcion,
                 profilePicture: req.file ? req.file.filename : profilePicture
             }
         }
         return user;
     });

     writeJSON(updatedUser, 'users.json');
    return res.redirect('/');
 };
