const express = require('express');
const UserController = require('../controllers/userController');

const routes = express.Router();

// User routes
routes.post('/users', UserController.register);
routes.post('/login', UserController.login);

module.exports = routes;