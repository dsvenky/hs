import React from "react";
import img from "../assets/SG Dental Logo.png";
import { useNavigate } from "react-router-dom";

const TopButtonsBanner = () => {
  const navigate = useNavigate();

  const appointment = () => {
    navigate("/appointment");
  };

  const secondOption = () => {
    navigate("/secondOption");
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 bg-slate-50 h-auto">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img
            src={img}
            alt="SG Dental Logo"
            className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px] ml-2"
          />
          <h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500 font-semibold whitespace-nowrap"
            style={{ fontFamily: "Josefin Sans" }}
          >
            SG Dental Clinic
          </h3>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ml-auto mr-2 sm:mr-4 md:mr-8">
          <button
            onClick={appointment}
            className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
          >
            Appointment
          </button>
          <button
            onClick={secondOption}
            className="bg-blue-500 text-white px-4 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
          >
            Second Opinion
          </button>
        </div>
      </div>
    </>
  );
};

export default TopButtonsBanner;
