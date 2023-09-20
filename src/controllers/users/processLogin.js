const {validationResult} = require('express-validator');
const { readJSON } = require('../../data');

module.exports = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const users = readJSON('users.json');
        const {email, remember} = req.body
        const user = users.find(user => user.email === email);
        const {id, name, rol} = user;
        // guardo en session esta info
        req.session.userLogin = {
            id,
            name,
            rol
        }
        // guardo la cookie
        remember !== undefined && res.cookie('aventuraSF',req.session.userLogin,{
            maxAge: 1000 * 60 * 3 // 3 minutos
        })

        return res.redirect('/users/profile'); // Redirige al perfil del usuario

    }else {
        return res.render('login',{
            errors : errors.mapped()
        })
    }
    
}