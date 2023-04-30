import React from 'react';

const ErrorMessages = ({ errors }) => {
  return (
    <div>
      {errors.map((error, index) => (
        <div key={index} className="error-message">
          {error}
        </div>
      ))}
    </div>
  );
};

export default ErrorMessages;