import React from 'react';

function ItinerarySummary({ itinerary }) {
  // Calculate total cost of itinerary
  const totalCost = itinerary.items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Itinerary Summary</h2>
      <p><strong>Destination:</strong> {itinerary.destination}</p>
      <p><strong>Start Date:</strong> {itinerary.startDate}</p>
      <p><strong>End Date:</strong> {itinerary.endDate}</p>
      <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
      <ul>
        {itinerary.items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.price})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItinerarySummary;
