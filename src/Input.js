import React from 'react';

const Input = ({ onSubmit, userInput, setUserInput }) => {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        placeholder="Type your prompt for ChatGPT"
      />
      <button type="submit">Ask ChatGPT</button>
    </form>
  );
};

export default Input;