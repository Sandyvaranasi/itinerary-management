const express = require('express');

const ItineraryController = require('../controllers/itineraryController');
const {authenticateToken} = require('../middlewares/authMiddleware');

const routes = express.Router();

// Itinerary routes
routes.get('/itineraries', authenticateToken, ItineraryController.getItineraries);
routes.post('/itineraries', authenticateToken, ItineraryController.createItinerary);
routes.get('/itineraries/:id', authenticateToken, ItineraryController.getItineraryById);
routes.put('/itineraries/:id', authenticateToken, ItineraryController.updateItinerary);
routes.delete('/itineraries/:id', authenticateToken, ItineraryController.deleteItinerary);

module.exports = routes;