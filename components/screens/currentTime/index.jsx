"use client";

import React, { useEffect, useRef, useState } from "react";

const CurrentTimeScreen = () => {
  const [time, setTime] = useState();
  const [clickCount, setClickCount] = useState(0);

  // Ref for tracking the component's render count
  const renderCount = useRef(-1);

  // Event handler for the button click
  const handleButtonClick = () => {
    // Increment the click count and update the current time
    setClickCount(clickCount + 1);
    setTime(new Date().toLocaleTimeString());
  };

  // useEffect hook to log the component's render count
  useEffect(() => {
    // Increment the render count using the useRef reference
    renderCount.current++;
  });

   // Log the updated click count to the console
   console.log(`Button Click Count: ${clickCount}`);

  return (
    <div className="center">
      {/* Button to trigger the handleButtonClick event */}
      <button onClick={handleButtonClick}>Show Current Time</button>

      {/* Display the current time */}
      <p>Current Time: {time}</p>

      {/* Display the click count */}
      <p>Click Count: {clickCount}</p>

      {/* Display the component's render count using the useRef reference */}
      <p>Component Render Count: {renderCount.current > 0 ? renderCount.current : 0}</p>
    </div>
  );
};

export default CurrentTimeScreen;
