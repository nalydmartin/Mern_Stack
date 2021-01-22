const moongose = require('mongoose');

const AuthorSchema = new moongose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required."
        ],
        minlength: [
            3, 
            "Name must be at least 3 characters."]
    }
}, {timestamps: true})

// "Author" is the collection and AuthorSchema is creating our documents.
module.exports.Author = mongoose.model("Author", AuthorSchema);

