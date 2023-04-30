const Itinerary = require('../models/itinerary');

// Create a new itinerary
const createItinerary = async (req, res, next) => {
  try {
    const { destination, startDate, endDate, activities, accommodations } = req.body;
    const userId = req.user.id;
    const itinerary = await Itinerary.create({ destination, startDate, endDate, activities, accommodations, userId });
    res.status(201).send(itinerary);
  } catch (error) {
    next(error);
  }
};

// Get all itineraries for the logged-in user
const getItineraries = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const itineraries = await Itinerary.find({ userId });
    res.send(itineraries);
  } catch (error) {
    next(error);
  }
};

// Get an itinerary by ID
const getItineraryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const itinerary = await Itinerary.findOne({ _id: id, userId });
    if (!itinerary) {
      return res.status(404).send({ message: 'Itinerary not found' });
    }
    res.send(itinerary);
  } catch (error) {
    next(error);
  }
};

// Update an itinerary by ID
const updateItinerary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const itinerary = await Itinerary.findOneAndUpdate({ _id: id, userId }, req.body, { new: true });
    if (!itinerary) {
      return res.status(404).send({ message: 'Itinerary not found' });
    }
    res.send(itinerary);
  } catch (error) {
    next(error);
  }
};

// Delete an itinerary by ID
const deleteItinerary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const itinerary = await Itinerary.findOneAndDelete({ _id: id, userId });
    if (!itinerary) {
      return res.status(404).send({ message: 'Itinerary not found' });
    }
    res.send(itinerary);
  } catch (error) {
    next(error);
  }
};

module.exports = {deleteItinerary,updateItinerary,getItineraryById,createItinerary,getItineraries}