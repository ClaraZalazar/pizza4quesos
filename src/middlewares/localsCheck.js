module.exports = (req,res,next) => {
    // si hay un usuario logeado 
    if(req.session.userLogin){
        //en res.locals me pone el valor de userLogin
        res.locals.userLogin = req.session.userLogin
    }
    next()
}