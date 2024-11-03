import React, { useState } from "react";

const DoctorsCard = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="flex flex-row justify-between max-w-screen-lg mx-auto mt-10 space-x-3">
      {/* Left card */}
      <div className="flex-1 flex justify-end ">
        <div
          className={`max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-700 ease-in-out ${
            isAnimating ? "animate-slideLeft" : "animate-returnLeft"
          }`}
          onMouseEnter={handleMouseEnter}
          onAnimationEnd={handleAnimationEnd}
        >
          <img
            className="w-full h-36 object-cover"
            src="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold">
              Dr. Sravanthi Tummalapalli
            </h5>
            <p className="text-sm text-gray-500">
              Prosthodontist & Implantologist
            </p>
          </div>
          <div className="flex justify-center gap-4 p-4 border-t">
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Right card */}
      <div className="flex-1 flex justify-start ">
        <div
          className={`max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-700 ease-in-out ${
            isAnimating ? "animate-slideRight" : "animate-returnRight"
          }`}
          onMouseEnter={handleMouseEnter}
          onAnimationEnd={handleAnimationEnd}
        >
          <img
            className="w-full h-36 object-cover"
            src="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <div className="p-4 text-center">
            <h5 className="text-lg font-semibold">Lizard1</h5>
            <p className="text-sm text-gray-500">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </p>
          </div>
          <div className="flex justify-center gap-4 p-4 border-t">
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Share
            </button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
