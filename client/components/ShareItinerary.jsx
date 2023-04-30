import React, { useState } from 'react';

function ShareItinerary({ itinerary }) {
  const [url, setUrl] = useState('');

  // Generate unique URL for itinerary
  const generateUrl = () => {
    const baseUrl = 'https://example.com/itinerary/';
    const itineraryId = itinerary.id;
    const uniqueUrl = baseUrl + itineraryId;
    setUrl(uniqueUrl);
  };

  // Copy URL to clipboard
  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  return (
    <div>
      <h2>Share Itinerary</h2>
      <p>Use the link below to share your itinerary with others:</p>
      <p>
        <a href={url}>{url}</a>{' '}
        {url && (
          <button onClick={copyUrl}>Copy URL</button>
        )}
      </p>
      <button onClick={generateUrl}>Generate URL</button>
    </div>
  );
}

export default ShareItinerary;
