const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');

require('dotenv').config();

mongoose.set('strictQuery', false);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect("mongodb+srv://sandy_varanasi:sRzKkk5zN4u6uAZG@sandy-clusture.eimj9vg.mongodb.net/itinerary", { useNewUrlParser: true})
.then(()=>console.log('MongoDB database connection established successfully'))
.catch((err)=>console.log(err.message))

// Routes
app.use('/users', userRoutes);
app.use('/itineraries', itineraryRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});