const PersonController = require('../controllers/person.controller');
const { Person } = require('../models/person.model');

module.exports = function(app) {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson )
}