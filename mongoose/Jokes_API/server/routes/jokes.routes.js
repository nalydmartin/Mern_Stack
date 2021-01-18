const JokeController = require('../controllers/jokes.controller');

module.exports = app => {

    // ----------- RETURN A lIST OF ALL JOKES ----------- //
    app.get("/api/jokes", JokeController.findAllJokes);

    // ----------- RETURN A SINGLE JOKE ----------- //
    app.get("/api/jokes/:id", JokeController.findSingleJoke);

    // ----------- RETURN A RANDOM JOKE ----------- //
    // app.get("/api/jokes/random", JokeController.)

    // ----------- RETURN FORM TO CREATE A NEW JOKE ----------- //
    app.post("/api/jokes/new", JokeController.createNewJoke);

    // ----------- RETURN FORM TO UPDATE A JOKE ----------- //
    app.put("/api/jokes/update/:id", JokeController.updateJoke);

    // ----------- RETURN FORM TO DELETE A JOKE ----------- //
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);

}