import React, { useState } from 'react';
import Input from './Input';
import Output from './Output';
import OpenAI from 'openai';

// Set API key correctly
OpenAI.apiKey = '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';

function App() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: userInput,
        max_tokens: 150,
        temperature: 0.7,
      });

      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
      // Handle error gracefully, e.g., display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Input onSubmit={handleSubmit} userInput={userInput} setUserInput={setUserInput} />
      <Output response={response} isLoading={isLoading} />
    </div>
  );
}

export default App;