// CRUD for AUTHORS

const { request, response } = require('express');
const {Author} = require('../models/author.model');

// CHECK IF BACK END API IS WORKING
module.exports.index = (req, res) => {
    res.json({message: "It works!"})
}

// ----- CREATE A NEW AUTHOR ----- //
module.exports.createAuthor = (request, response) => {
    const {name} = request.body;

    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.json(err))
}


// ----- FIND ALL AUTHORS ----- //
module.exports.findAuthors = (request, response) => {

    Author.find({})
                    .then(authors => response.json(authors))
                    .catch(err => response.json(err));
}

// ----- FIND ONE AUTHOR ----- //
module.exports.findAuthor = (request, response) => {
    Author.findOne({_id: request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}


// ----- UPDATE AN AUTHOR ----- //
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updatedAuthor => request.json(updatedAuthor))
    .catch(err => response.json(err));
}


// ----- DELETE AN AUTHOR ----- //
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}