const {validationResult} = require('express-validator')
const { readJSON, writeJSON } = require("../../data");
const {existsSync, unlinkSync} = require('fs');
const Product = require("../../data/Product");


module.exports = (req, res) => {

    const errors = (validationResult(req)); //guardo en la constante errors lo que devuelve validationResult

    if(errors.isEmpty()){ //si no hay error hace todo esto:
        const products = readJSON("products.json"); //traigo el producto del json

        const data = { //creo un objeto nuevo
            ...req.body,
            image : req.file ? req.file.filename : null
        }
    
        let newProduct = new Product(data); //el obj que cree anteriormente lo paso como parametro para que la funcion constructora haga lo suyo
        products.push(newProduct); //esa instancia es la que se pushea
    
        writeJSON(products, 'products.json'); //guardo lo que hice
    
        return res.redirect('/dashboard');
    } else{
        // si en algun lugar del form hay error la imagen que subi se va a eliminar, de esta manera no se guarda basura en el proyecto
    if(req.file){
        existsSync('./public/images/' + req.file.filename) && unlinkSync('./public/images/' + req.file.filename)
    }

        const products = readJSON("products.json");

    return res.render("productAdd", {
        products: products.sort((a, b) =>
        a.hotel > b.hotel ? 1 : a.hotel < b.hotel ? -1 : 0
        ),
        errors : errors.mapped(),
        old: req.body //lo que recibo del form lo envio otra vez, basicamente para que no se borre todo
    });
    }


}