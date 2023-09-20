const { readJSON } = require("../../data")

    module.exports = (req,res) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.id === req.session.userLogin.id)
        const name = "Nombre de usuario"; 
        const surname = "Apellido del usuario";
        const email = "email del usuario";
        const telefono = "telefono del usuario";
        const genero = "genero del usuario";
        const asiento = "preferencia de asiento del usuario";
        const suscripcion = "preferencia de suscripcion del usuario";
        const fotoPerfil = "foto del perfil del usuario";
        const birthday = "cumpleaños del usuario";


        return res.render('profile', {
            ...user,
            name: user.name,
            surname: user.surname,
            email: user.email,
            telefono: user.telefono,
            genero:user.genero,
            asiento: user.asiento,
            suscripcion: user.suscripcion,
            fotoPerfil: user.fotoPerfil,
            birthday: user.birthday
        })
    }
    