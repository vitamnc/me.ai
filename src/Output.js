import React from 'react';

const Output = ({ response, isLoading }) => {
  return (
    <div className="output-container">
      {isLoading ? (
        <p>Thinking...</p>
      ) : (
        <p>{response}</p>
      )}
    </div>
  );
};

export default Output;