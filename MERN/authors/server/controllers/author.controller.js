
const {Author} = require('../models/author.model');




// ----- CREATE NEW AUTHOR ----- //
module.exports.createAuthor = (req, res) => {
    const {name} = req.body;
    Author.create({
        name
    })
    .then(author => res.json(author))
    .catch(err => res.json(err));
}

// ----- FIND ALL AUTHORS ----- //
module.exports.findAuthors = (req, res) => {
    Author.find({})
    .then(authors => res.json(authors))
    .catch(err => res.json(err))
}