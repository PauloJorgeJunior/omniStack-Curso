const express = required('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/users', SessionController.store);

module.exports = routes;