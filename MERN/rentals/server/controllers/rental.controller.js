
// CRUD methods for our Rentals
const Rental = require('../models/rental.model');

// ----- GET ALL RENTALS ----- //
module.exports.getAllRentals = (req, res) => {

    // .find() returns a promise!
    Rental.find()
        .then(allRentals => res.json(allRentals) ) // param (allRentals) can be called anything. Use res.json to send all rentals back to the client side.
        .catch(err => res.json({ error: err }) ) // In case of errors
    ;
}

// ----- CREATE A NEW RENTAL ----- //
module.exports.createRental = (req, res) => {

    console.log("This is the request body: ", req.body);
    // Our request should have a req.body 
    Rental.create(req.body) // Returns a promise!
        .then(newProperty => res.json({ property: newProperty }) )
        .catch(err => res.status(400).json(err) );
}


// ----- ADD A LIKE ----- //
module.exports.addLike = (req, res) => {

    //request.params is an object! 
    console.log("Request.params is this:", req.params);

    Rental.findByIdAndUpdate( // Returns a promise!
        req.params.rentalId,
        {
            $inc: {
                likes: 1
            }
        },
        {
            new: true // returns the updated document! Must be included to get the updated object and not the previous version.
        }
    )
    .then(updatedRental => res.json(updatedRental)) // Send updated rental back to the client from the database.
    .catch(err => res.json(err))
}


// ----- DELETE A RENTAL ----- //
module.exports.deleteRental = (req, res) => {
    // Id comes from req.params
    Rental.findByIdAndDelete(req.params.rentalId)
    .then(() => res.json({delete: "successful"}))
}