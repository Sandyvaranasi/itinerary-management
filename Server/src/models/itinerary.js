const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  activities: [
    {
      name: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
  ],
  accommodations: [
    {
      name: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      checkInDate: {
        type: Date,
        required: true,
      },
      checkOutDate: {
        type: Date,
        required: true,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', itinerarySchema);