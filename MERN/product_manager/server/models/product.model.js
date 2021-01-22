const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String,
    required: [
        true,
        "Title is required."
    ],
    minlength: [2, "Title must be at least 2 characters."]
    },
    price: {type: String,
    required: [
        true, 
        "Price is required."
    ],
    minlength: [1, "Price must be at least 1 character."]
    },
    description: {type: String,
    required: [
        true,
        "Description is required."
    ],
    minlength: [1, "Description must be at least 5 characters."]
}
}, {timestamps: true});

module.exports.Product = mongoose.model("Product", ProductSchema);