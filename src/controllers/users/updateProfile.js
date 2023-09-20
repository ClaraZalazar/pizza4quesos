const { readJSON, writeJSON } = require("../../data");
const path = require('path');

module.exports = async (req, res) => {
    const users = readJSON('users.json');

    if (req.file) {
        console.log('Nombre del archivo:', req.file.filename);
    } else {
        console.log('No se cargó ningún archivo');
    }

    const updatedUser = {
        id: req.session.userLogin.id,
        name: req.body.name,
        surname: req.body.surname,
        birthday: req.body.birthday,
        telefono: req.body.telefono,
        genero: req.body.genero,
        asiento: req.body.asiento,
        suscripcion: req.body.suscripcion,
        profilePicture: req.file ? req.file.filename : null
    };

    const userIndex = users.findIndex(user => user.id === req.session.userLogin.id);
    users[userIndex] = updatedUser;

    writeJSON(users, 'users.json');

    res.redirect('/');
};
