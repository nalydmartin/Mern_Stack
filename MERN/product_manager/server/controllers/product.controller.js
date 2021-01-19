const {product, Product} = require('../models/product.model');


// -----  ----- //
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// ----- CREATE A NEW PRODUCT ----- //
module.exports.createProduct = (request, response) => {
    const {title, price, description} = request.body;

    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

// ----- FIND ALL PRODUCTS ----- //
module.exports.getAllProducts = (request, response) => {
    Product.find({})
    .then(products => response.json(products))
    .catch(err => response.json(err));
}

// ----- FIND ONE PRODUCT ----- //
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}