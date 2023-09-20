const {validationResult} = require('express-validator')
const User = require('../../data/User')
const { readJSON, writeJSON } = require('../../data')

module.exports = (req, res) => {
    let errors = validationResult(req)
    //si los errores estan vacios muestra lo que viene por el body
    if(errors.isEmpty()){
        const users = readJSON('users.json');
        //paso nueva instancia de la funcion constructora
        const newUser = new User(req.body);
        users.push(newUser);
        //guardo en json
        writeJSON(users, 'users.json');
         return res.redirect('/')
        // return res.redirect('/profile'); // En lugar de return res.redirect('/');

    } else{
        // si no lo devuelve a register y con lo que completo
        return res.render('register',{
            old : req.body,
            errors : errors.mapped() 
        })
    }
    


    
}