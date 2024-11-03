import React from "react";
import adv from "../assets/Advance tech dental.jpg";
import price from "../assets/Affortable price.png";
import ped from "../assets/pediatric-dentist.png";
import per from "../assets/personalized doctor options.jpg";
import spl from "../assets/spl.png";
import { useNavigate } from "react-router-dom";
import { useAnimation } from "../hooks/hooks.js";

const WhyweChoose = () => {
  const navigate = useNavigate();
  const { IsAnimated, handleMouseEnter } = useAnimation();
  const appointment = () => {
    navigate("/Appointment");
  };
  const imgs = [
    {
      src: ped,
      name: "Pediatric Dental Specialist",
      dec: "Empowering children with\n the confidence of a beautiful smile.",
    },
    {
      src: per,
      name: "Personalized Monitoring",
      dec: "Keeping track of your oral\n health with personalized insights.",
    },
    {
      src: spl,
      name: "Specialist Doctor Care",
      dec: "Dedicated specialists\n focused on your dental health.",
    },
    {
      src: adv,
      name: "Advanced Technology",
      dec: "Delivering precise diagnostics and treatments with\n the latest advancements.",
    },
    {
      src: price,
      name: "Affordable Price",
      dec: "Exceptional dental care with transparent pricing, making quality health accessible for all.",
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center my-20 w-full px-5  sm:px-8 lg:px-16"
      onMouseEnter={handleMouseEnter}
    >
      <div
        className={`text-blue-500 text-4xl sm:text-5xl lg:text-6xl delay-100 w-full ${
          IsAnimated ? "animate-fontmove" : "opacity-0"
        } -mb-2 `}
      >
        <h2 className="text-center select-none ">Why Choose Us</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 p-2 w-full max-w-8xl">
        {imgs.map((img) => (
          <div
            className="flex flex-col items-center text-center space-y-3 p-5 bg-slate-300 backdrop-blur-lg rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            key={img.name}
          >
            <img
              src={img.src}
              alt="img"
              className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-lg"
            />
            <h4
              className="text-blue-950 text-lg sm:text-xl lg:text-2xl font-semibold"
              style={{ fontFamily: "Josefin Sans" }}
            >
              {img.name}
            </h4>
            <h5
              className="text-violet-800 text-sm sm:text-base lg:text-lg"
              style={{ lineHeight: "1.5rem", maxHeight: "6.5rem" }}
            >
              {img.dec.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < img.dec.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h5>
            <button
              onClick={appointment}
              className="bg-blue-500 text-white px-3 sm:px-4 py-2 sm:py-2 mt-4 rounded-lg select-none hover:bg-blue-700 transition-colors duration-200"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyweChoose;
