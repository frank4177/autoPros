"use client"
import React, { useState } from 'react';



const CharsCounterScreen = () => {
  const [inputText, setInputText] = useState('');
  const [maxChars, setMaxChars] = useState([]);
  const [maxCount, setMaxCount] = useState(0);

  // Event handler for input text changes
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Calculate consecutive character counts
    let currentChar = '';           // Current character being processed
    let currentCount = 0;           // Count of consecutive characters
    let maxConsecutiveCount = 0;    // Maximum consecutive character count
    let maxConsecutiveChars = [];   // Characters with the maximum count

    for (let i = 0; i < text.length; i++) {
      if (text[i] === currentChar) {
        currentCount++;
      } else {
        currentChar = text[i];
        currentCount = 1;
      }

      // Update the maximum consecutive characters and count
      if (currentCount > maxConsecutiveCount) {
        maxConsecutiveCount = currentCount;
        maxConsecutiveChars = [currentChar];
      } else if (currentCount === maxConsecutiveCount) {
        maxConsecutiveChars.push(currentChar);
      }
    }

    // Update the state with the maximum consecutive characters and count
    setMaxChars(maxConsecutiveChars);
    setMaxCount(maxConsecutiveCount);

    // Log the result to the console
    console.log(`Consecutive characters: ${maxConsecutiveChars.join(', ')} - Count: ${maxConsecutiveCount}`);
  };

  return (
    <div className="center">
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange} 
      />
      <p>
        {/* Display the maximum consecutive characters and their count */}
        {maxChars.join(', ')}: {maxCount} 
      </p>
    </div>
  );
}

export default CharsCounterScreen;