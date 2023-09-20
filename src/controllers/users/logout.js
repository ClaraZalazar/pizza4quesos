module.exports = (req, res) => {
    req.session.destroy();
    //mato a la cookie si quiero salir
    res.cookie('aventuraSF', null,{
        maxAge : -1
    })
    return res.redirect('/');
}