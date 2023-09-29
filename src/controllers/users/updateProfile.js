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
         telefono, 
         genero, 
         asiento, 
         suscripcion, 
         profilePicture 
     } = req.body;

     const updatedUser = users.map(user => {
        if (user.id === req.session.userLogin.id) {
            return {
                ...user,
                name: name ? name.trim() : (user.name ? user.name.trim() : user.name),
                surname: surname ? surname.trim() : (user.surname ? user.surname.trim() : user.surname),
                birthday: birthday || user.birthday,
                telefono: telefono ? telefono.trim() : (user.telefono ? user.telefono.trim() : user.telefono),
                genero: genero || user.genero,
                asiento: asiento || user.asiento,
                suscripcion: suscripcion || user.suscripcion,
                profilePicture: req.file ? req.file.filename : user.profilePicture
            }
        }
        return user;
    });
    
     writeJSON(updatedUser, 'users.json');
    return res.redirect('/');
 };
