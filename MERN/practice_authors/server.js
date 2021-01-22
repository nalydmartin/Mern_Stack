const express = require('express'); // Import express library
const app = express()
const cors = require('cors'); // Import cors --> allows us to run client and backend server simultaneously.

require('./server/config/mongoose.config'); // This line should come after the imports. Must be above the required routes.


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); // (Maybe) Allows access to API from front-end to back-end using URLS

// require('./server/routes/author.routes')(app);

app.listen(8000, () => {
    console.log("Listening on port 8000...");
})