"use client"


import styles from "./index.module.css";
import React, { useState } from 'react';

// Custom hook for handling mouse position and background color
function useMousePositionBackground() {
  const initialColor = 'rgb(0, 255, 0)';
  const [backgroundColor, setBackgroundColor] = useState(initialColor);

  // Handle mouse move event
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Calculate the green component based on mouse position
    const green = Math.max(50, Math.floor((x / window.innerWidth * 255 + y / window.innerHeight * 255) / 2));

    // Create the new background color
    const newColor = `rgb(0, ${green}, 0)`;

    // Update the background color only when it changes
    if (backgroundColor !== newColor) {
      setBackgroundColor(newColor);
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    // Reset the background color to the initial color
    if (backgroundColor !== initialColor) {
      setBackgroundColor(initialColor);
    }
  };

  // Return the background color and event handlers
  return {
    backgroundColor,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}

console.log("loop")

function MousePositionBackground() {
  // Use the custom hook to get background color and event handlers
  const { backgroundColor, onMouseMove, onMouseLeave } = useMousePositionBackground();

  return (
    <div
      style={{
        backgroundColor
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={styles.background}
    >
      <h1>Move your mouse in any direction to change the shade of green</h1>
    </div>
  );
}

export default MousePositionBackground;
