const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name:{
		type: String,
		required: [true, "Name is required."],
		minlength: [2, "Name must be at least 2 characters."]
	},
	age: {
		type: Number,
		min: [12, "You must be at least 12 years old to register!"],
		max: [110, "You cannot be older than 110 years old to register."]
	}
}, { timestamps: true});

// create a constructor function for our model and store in variable 'User'
const User = mongoose.model("User", UserSchema);

module.exports = User;