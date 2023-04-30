import React, { useState, useEffect } from 'react';

function SuggestedItems({ itinerary }) {
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggested items from the server
  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch(`/api/suggestions?destination=${itinerary.destination}&startDate=${itinerary.startDate}&endDate=${itinerary.endDate}`);
      const data = await response.json();
      setSuggestions(data);
    };
    fetchSuggestions();
  }, [itinerary]);

  return (
    <div>
      <h2>Suggested Activities and Accommodations</h2>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            {suggestion.name} ({suggestion.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestedItems;
