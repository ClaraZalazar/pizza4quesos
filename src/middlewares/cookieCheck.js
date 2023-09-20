module.exports = (req,res,next) => {
    if(req.cookies.aventuraSF){
        req.session.userLogin = req.cookies.aventuraSF
    }
    next()
}