import React from "react";
import img2 from "../assets/banner9.jpg";

const Banner = () => {
  return (
    <div className="relative z-10 w-full">
      <img
        src={img2}
        alt="Banner"
        className="w-full h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center h-full w-full px-4">
        <h4
          className="text-blue-500 text-shadow text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center animate-fontmove"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Welcome to SG Dental Clinic
        </h4>
        <h2
          className="text-blue-500 text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center animate-fontmove mt-2 md:mt-6"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Where Your Smile is Our Priority
        </h2>
        <h1
          className="text-blue-500 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center animate-fontmove mt-4 md:mt-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Special Opening Announcement Section
        </h1>
        <h1
          className="text-blue-500 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center animate-fontmove mt-2 md:mt-5"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Grand Opening! Free Consultation on 2nd November 2024, from 10 AM to 2
          PM.
        </h1>
        <h2
          className="text-blue-500 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center animate-fontmove mt-2 md:mt-5"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Book Your Slot Now!
        </h2>
      </div>
    </div>
  );
};

export default Banner;
