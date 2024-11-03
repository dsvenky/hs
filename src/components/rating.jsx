import React, { useState } from 'react';
// component working
const Rating = () => {
  const [rating, setRating] = useState(0);
  
  // Array with values from 0.5 to 5.0 in 0.5 increments
  const count = [ 1, 2, 3, 4,  5]; 
 

  // Function to handle the selected rating
  const ratingSelected = (value) => {
    setRating(value);
    alert(value); // Show an alert with the selected rating
  };
  
  return (
    <div className='flex space-x-1'>
      {count.map((value) =>  (
        
        <svg
          key={value}
          onClick={() => ratingSelected(value)} // Call the function with the selected value
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 cursor-pointer ${value <= rating ? 'text-yellow-400' : 'text-gray-400'}`} // Conditional classes for star color
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-3.09 1.63L7.1 12.09 5 9.24l4.05-.35L10 5l1.95 3.89 4.05.35-2.1 2.85 1.09 4.54L10 15z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
