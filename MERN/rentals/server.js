const express = require('express');
const cors = require('cors');

require('./server/config/mongoose.config'); // Line needs to come before models get used! 

// This needs to come before being passed into routes! 
const app = express(); // Invoking the express function!

// app.use() allows us to insert code between the request and the response.
app.use(express.json()); // Allows us to read the data sent with the request from the frontend.

app.use(cors()); // Allows frontend to make requests to the backend even though they are on different domains / servers (8000 vs 3000)

const rentalRoutes = require('./server/routes/rental.routes');
rentalRoutes(app);

app.listen(8000, () => console.log("Listening on port 8000...") );