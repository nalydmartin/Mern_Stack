const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {

    

    // ----- CREATE AN AUTHOR ROUTE ----- //
    app.post('/new', AuthorController.createAuthor);

    // ----- LIST ALL AUTHORS ROUTE ----- //
    app.get('/', AuthorController.findAuthors);

    

}