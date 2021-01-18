const Joke = require("../models/jokes.model");

// ------ GET ALL JOKES ------ //
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokesAside => res.json({jokes : allJokesAside}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
}

// ------ GET A SINGLE JOKE ------ //
module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(singleJoke => res.json({
        joke: singleJoke
    }))
    .catch(err => res.json({message: "Something went wrong", error: err}));
}


// ------ CREATE A JOKE ------ //
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
}

// ------ UPDATE A JOKE ------ //
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedJoke => res.json({joke: updatedJoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
}

// ------ Delete A JOKE ------ //
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
}