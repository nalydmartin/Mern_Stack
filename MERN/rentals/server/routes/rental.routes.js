const RentalController = require('../controllers/rental.controller');

module.exports = (app) => {

    // API PATH TO GET ALL RENTALS
    app.get('/api/rentals', RentalController.getAllRentals);

    // API PATH TO CREATE A RENTAL
    app.post('/api/rentals', RentalController.createRental);

    // API PATH TO ADD LIKES TO RENTAL
    app.put('/api/rentals/:rentalId/likes', RentalController.addLike);
    // request.params will look like this: 
    // {
    //     rentalId: "random_id_here"
    // }

    // API ROUTE TO DELETE RENTAL
    app.delete('/api/rentals/:rentalId', RentalController.deleteRental);
}