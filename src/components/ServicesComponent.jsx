import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import from "../assets/8.png";
const ServiceC = () => {
  const natvigate = useNavigate();
  const [services] = useState([
    {
      name: "Teeth Fillings",
    },
    {
      name: "Common Problems",

      "sub-service": [
        "Sensitive Teeth Treatment ",
        "Mouth Ulcers",
        "Teeth Grinding",
      ],
    },
    {
      name: "Root Canal Treatment",
    },
    {
      name: "Caps & Bridges",
    },
    {
      name: "Dental Implant",

      "sub-service": [
        "Single / Multi Teeth Replacement",
        "Full Mouth Fixed Teeth",
      ],
    },
    {
      name: "Dentures",
    },
    {
      name: "Braces & Invisible Aligners",
    },
    {
      name: "Kids Dentistry",
    },
    {
      name: "Surgeries",

      "sub-service": ["Wisdom Teeth Removal", "Simple Extraction", "Other"],
    },
  ]);

  const handleNavigation = () => {
    natvigate("/appointment");
  };

  const serviceslist = [];
  services.forEach((e) => {
    serviceslist.push(e.name);
    if (e["sub-service"]) serviceslist.push(...e["sub-service"]);
  });

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5 select-none backdrop-blur-lg">
        {serviceslist.map((e, index) => (
          <div key={index} className="flex justify-center">
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-700 ease-in-out">
              {/* Uncomment if you want to display an image */}
              {/* <img 
          className="w-full h-36 object-cover"
          src={e.image} // Assuming e has an image property
          alt={e.name} // Assuming e has a name property for alt text
        /> */}
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold">{e}</h5>
                {/* Uncomment if you want to display a description */}
                {/* <p className="text-sm text-gray-500">{e.description}</p> */}
              </div>
              <div className="p-4 border-t">
                <button
                  onClick={handleNavigation}
                  className="px-4 py-2 text-white text-center bg-blue-600 rounded hover:bg-blue-700 w-full"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceC;
