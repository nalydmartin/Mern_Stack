const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required."],
        minlength: [10, "Setup must be at least 10 characters long."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required."],
        minlength: [3, "Punchline must be at least 3 characters long."]
    },
}, {timestamps: true});

// create a constructor function for our model and store in variable 'Joke'
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
