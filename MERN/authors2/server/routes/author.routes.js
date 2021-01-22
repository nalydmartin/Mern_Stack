const AuthorController = require('../controllers/author.controller');

module.exports = function (app) {

    app.get('/', AuthorController.index)

    // API ROUTE FOR CREATING AN AUTHOR
    app.post('/api/new', AuthorController.createAuthor);

    // API ROUTE FOR FINDING ALL AUTHORS
    app.get('/api/authors', AuthorController.findAuthors);

    // API ROUTE TO UPDATE AUTHOR
    app.put('/api/authors/:id', AuthorController.updateAuthor);

    // API ROUTE TO DELETE AUTHOR
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}