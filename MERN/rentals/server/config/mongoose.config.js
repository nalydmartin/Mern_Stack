const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/rentaldb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})// This returns a promise
    .then( () => console.log("Connected to the database!") )
    .catch( err => console.log("Error occurred when connecting to the database...", err) );