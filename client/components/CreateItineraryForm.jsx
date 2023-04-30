import React, { useState } from 'react';

const CreateItineraryForm = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activities, setActivities] = useState([]);
  const [accommodations, setAccommodations] = useState([]);

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleActivityChange = (event) => {
    setActivities([...activities, event.target.value]);
  };

  const handleAccommodationChange = (event) => {
    setAccommodations([...accommodations, event.target.value]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const itineraryData = {
      destination: destination,
      startDate: startDate,
      endDate: endDate,
      activities: activities,
      accommodations: accommodations
    };

    // TODO: Implement API call to create itinerary
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Destination:
        <input type="text" value={destination} onChange={handleDestinationChange} />
      </label>
      <br />
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={handleStartDateChange} />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" value={endDate} onChange={handleEndDateChange} />
      </label>
      <br />
      <label>
        Activities:
        <input type="text" onChange={handleActivityChange} />
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </label>
      <br />
      <label>
        Accommodations:
        <input type="text" onChange={handleAccommodationChange} />
        <ul>
          {accommodations.map((accommodation, index) => (
            <li key={index}>{accommodation}</li>
          ))}
        </ul>
      </label>
      <br />
      <button type="submit">Create Itinerary</button>
    </form>
  );
};

export default CreateItineraryForm;