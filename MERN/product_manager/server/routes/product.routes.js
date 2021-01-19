const ProductController = require('../controllers/product.controller');

const {Product} = require('../models/product.model');

module.exports = function(app) {
    app.get('/', ProductController.index);

// ----- PATH TO CREATE NEW PRODUCT ----- //
    app.post('/api/products', ProductController.createProduct);

// ----- PATH TO SHOW ALL PRODUCTS ----- //
    app.get('/api/products', ProductController.getAllProducts);

    // ----- PATH TO SHOW ONE PRODUCT ----- //
    app.get('/api/products/:id', ProductController.getProduct);

}

