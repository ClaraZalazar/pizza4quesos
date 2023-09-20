const { body } = require('express-validator');

module.exports = [
    body('name')
        .notEmpty().withMessage('El nombre es requerido').bail()
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('surname')
        .notEmpty().withMessage('El apellido es requerido').bail()
        .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
    body('birthday')
        .notEmpty().withMessage('La fecha de nacimiento es requerida')
        .isDate().withMessage('La fecha de nacimiento debe ser una fecha válida'),
    body('telefono') 
        .optional() 
        .isNumeric().withMessage('El teléfono debe ser numérico'),
    body('asiento')
        .notEmpty().withMessage('La preferencia de asiento es requerida'),
    body('suscripcion')
        .notEmpty().withMessage('La suscripción es requerida')
];
