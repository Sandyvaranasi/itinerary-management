import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItineraryList() {
  const [itineraries, setItineraries] = useState([]);

  // Fetch user's itineraries from the server
  useEffect(() => {
    const fetchItineraries = async () => {
      const response = await fetch('/api/itineraries');
      const data = await response.json();
      setItineraries(data);
    };
    fetchItineraries();
  }, []);

  return (
    <div>
      <h2>My Itineraries</h2>
      <ul>
        {itineraries.map((itinerary) => (
          <li key={itinerary._id}>
            <Link to={`/itineraries/${itinerary._id}`}>
              {itinerary.destination} ({itinerary.startDate} to {itinerary.endDate})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItineraryList;
