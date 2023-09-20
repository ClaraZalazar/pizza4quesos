const {check} = require('express-validator');
const { readJSON } = require('../data');

module.exports = [
    check("name")
        .isLength({
        min: 3,
        })
        .withMessage("Debe tener como mínimo tres letras")
        .bail()
        //para que me lea los caracteres como el acento o ñ
        .isAlpha('es-ES')
        .withMessage("Solo se permiten caracteres alfabéticos"),
    check("surname")
        .isLength({
        min: 3,
        })
        .withMessage("Debe tener como mínimo tres letras")
        .bail()
        .isAlpha()
        .withMessage("Solo se permiten caracteres alfabéticos"),
    check("email")
        .notEmpty()
        .withMessage("El email es obligatorio")
        .bail()
        .isEmail()
        .withMessage("Email no válido").bail()
        .custom((value)=>{
            const users = readJSON('users.json');
            //compruebo si existe un usuario con ese mail en la lista de usuarios
            const user = users.find(user => user.email === value);
            //si el valor del input es diferente al que viepor el req.body.email me retorna false si da bies true y lo registra
            return user ? false : true;
        }).withMessage('Este email ya se encuentra registrado'),
    check("password")
        .isLength({
            min: 6,
            max: 12,
        })
        .withMessage("Debe tener entre 6 y 12 caracteres"),
    check("password2")
        .notEmpty().withMessage('Debes completar el campo contraseña')
        .isLength({
            min: 6,
            max: 12,
        }).withMessage("Debe tener entre 6 y 12 caracteres")
        .custom((value, { req }) => { 
            //si el valor del input es diferente al que viene por el req.body.password me retorna false si da bien es true
            return value !== req.body.password ? false : true;
        }).withMessage("Las contraseñas no coinciden")
]