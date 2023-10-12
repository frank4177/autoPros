"use client"

import React from 'react';
const FindPairs = () => {
  // Define a function called findPairs that takes an array (arr) and a target value (target)
  const findPairs = (arr, target) => {
    const pairs = []; // Initialize an empty array to store pairs that sum up to the target
    const seenNumbers = new Set(); // Create a set to keep track of seen numbers

    // Iterate through the elements of the input array
    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i]; // Get the current element in the array
      const complement = target - currentNumber; // Calculate the complement to reach the target

      // Check if the complement has been seen before
      if (seenNumbers.has(complement)) {
        // Create a pair in ascending order (min and max)
        const pair = [Math.min(currentNumber, complement), Math.max(currentNumber, complement)];

        // Check if the pair already exists in the result
        const pairExists = pairs.some(([num1, num2]) => num1 === pair[0] && num2 === pair[1]);

        // If the pair doesn't exist in the result, add it to the pairs array
        if (!pairExists) {
          pairs.push(pair);
        }
      }

      // Add the current number to the set of seen numbers
      seenNumbers.add(currentNumber);
    }

    // Return the array containing the unique pairs that sum up to the target
    return pairs;
  };

  // Define an array of test cases, each with an array and a target value
  const testCases = [
    { arr: [3, 4, 5, 6, 7], target: 10 },
    { arr: [1, 2, 3, 4, 5], target: 7 },
    { arr: [2, 2, 4, 4], target: 6 },
    { arr: [1, 1, 1, 1], target: 2 },
    { arr: [3, 4, 5, 6, 7], target: 20 }
  ];

  // Iterate through the test cases and display the results in the console
  testCases.forEach(({ arr, target }, index) => {
    try {
      const pairs = findPairs(arr, target);
      console.log(`Test Case ${index + 1}:`, pairs); // Log the pairs found for each test case
    } catch (error) {
      console.error(`Test Case ${index + 1}:`, error.message); // Log any errors encountered during testing
    }
  });

  // Render a message in the React component indicating where to view the results in the console
  return <div className='center'>Open the console to see the output.</div>;
};

export default FindPairs;

