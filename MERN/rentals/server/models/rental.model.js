// Mongoose is the bridge between the application and the database //
const mongoose = require('mongoose'); // This line imports the entire library from the node_modules folder

const RentalSchema = new mongoose.Schema({

    address: {
        type: String,
        minlength: [10, "Address must be at least 10 characters."],
        required: [true, "Address is required."]
    },
    imageUrl: {
        type: String,
        minlength: [10, "Image URL must be at least 10 characters."],
        required: [true, "Address is required."]
    },
    newConstruction: {
        type: Boolean,
        default: false
    },
    propertyType: {
        type: String,
        required: [true, "Property type must be chosen."]
    },
    likes: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Rental = mongoose.model("Rental", RentalSchema); // Collection will be automatically named 'rentals' from our string "Rental"!

module.exports = Rental;
// Similar to export default Rental;

// Other way to export Rental Model
// module.exports.Rental = mongoose.model("Rental, RentalSchema");