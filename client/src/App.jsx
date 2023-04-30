import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
import LoginRegisterForm from '../components/LoginRegistreatioForm';
import CreateItineraryForm from '../components/CreateItineraryForm'
import ItineraryList from '../components/ItineraryList';
import SuggestedItems from '../components/SuggestedItems';
import ItinerarySummary from '../components/ItinerarySummary';
import ShareItinerary from '../components/ShareItinerary';
import ErrorMessage from '../components/ErrorMessage';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={Login} />
        <Route path="/register" element={Register} /> */}
        <Route exact path="/" element={<LoginRegisterForm/>} />
        <Route exact path="/create-itinerary" element={<CreateItineraryForm/>} />
        <Route exact path="/itinerary-list" element={<ItineraryList/>} />
        <Route exact path="/suggested-activities" element={<SuggestedItems/>} />
        <Route exact path="/itinerary-summary" element={<ItinerarySummary/>} />
        <Route exact path="/share-itinerary" element={<ShareItinerary/>} />
        <Route exact path="/error-messages" element={<ErrorMessage/>} />
      </Routes>
    </div>
  );
}

export default App;
