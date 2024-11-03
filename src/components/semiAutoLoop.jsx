import React from "react";
import img1 from "../assets/1.jpg";
import { useAnimation } from "../hooks/hooks.js";

const SemiAutoLoop = () => {
  const { IsAnimated, handleMouseEnter, handleMouseLeave } = useAnimation();
  const logos = [
    { src: img1, alt: "Logo 1" },
    { src: img1, alt: "Logo 2" },
    { src: img1, alt: "Logo 3" },
    { src: img1, alt: "Logo 4" },
    { src: img1, alt: "Logo 5" },
  ];

  return (
    <div className="backdrop-blur-lg">
      <div
        className="relative flex flex-col items-center my-20"
        onMouseEnter={handleMouseEnter}
      >
        <div
          className={`text-blue-500 text-4xl sm:text-5xl md:text-6xl w-auto ${
            IsAnimated ? "animate-fontmove" : "opacity-0"
          } absolute items-center h-10`}
        >
          <h2 className="text-center p-8 mt-5">Our Services</h2>
        </div>
      </div>

      <div
        className="m-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Rows of Logos */}
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <section
            key={rowIndex}
            className="flex justify-center items-center w-full h-[150px] mb-5 p-5"
          >
            <div
              className={`flex overflow-hidden ${
                IsAnimated
                  ? rowIndex % 2 === 0
                    ? "animate-servicesRtoL"
                    : "animate-servicesLtoR"
                  : ""
              }`}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center h-[100px] mx-2 sm:mx-4 md:mx-6 lg:mx-8"
                >
                  <img
                    src={logo.src}
                    className={`w-16 h-16 sm:w-24 sm:h-20 transition duration-1000 ${
                      IsAnimated
                        ? rowIndex % 2 === 0
                          ? "animate-servicesRtoL"
                          : "animate-servicesLtoR"
                        : ""
                    } ease-in-out hover:border-4 hover:border-blue-200 rounded-lg`}
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SemiAutoLoop;
