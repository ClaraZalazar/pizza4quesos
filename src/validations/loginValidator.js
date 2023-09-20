const {check} = require('express-validator');
const {compareSync} = require('bcryptjs');
const { readJSON } = require('../data');

module.exports = [
    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Email no válido'),
    check('password')
        .notEmpty().withMessage('La contraseña es obligatoria')
        .custom((value, {req}) => {
            const users = readJSON('users.json');
            const user = users.find(user => user.email === req.body.email)
            if(!user || !compareSync(value,user.password)){
                return false
            }
            return true
        }).withMessage('Credenciales inválidas')
]