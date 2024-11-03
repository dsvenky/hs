import React from "react";
import Navbar from "../components/navbar";
import cnt from "../assets/contact_us_bg.jpg";
import TopButtonsBanner from "../components/topButtonsBanner";
import { ContactForm } from "../components/forms";
import CopyRight from "../components/copyright";
import { Link } from "react-router-dom";
import Touch from "../components/touch";

const Contact = () => {
  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center bg-fixed select-none"
        style={{ backgroundImage: `url(${cnt})` }}
      >
        <TopButtonsBanner />
        <Navbar />

        <div className="flex flex-col  sm:flex-row items-start justify-center sm:justify-start gap-6 sm:gap-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-10 sm:pt-20 lg:pt-[10rem]">
          {/* Left Section */}
          <div className="text-white flex flex-col justify-center sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-3 shadow-sm text-shadow-slate-400">
              Did Have Questions?
              <br /> Get In Touch!
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 leading-relaxed">
              We are dedicated to providing high-quality dental care in a
              comfortable and welcoming environment. If you have any questions
              or would like to schedule an appointment, please don't hesitate to
              contact us.
            </p>
            <Link
              to="/Appointment"
              className="mt-6 ml-[7rem] sm:mt-8 bg-slate-50 w-[10rem] text-blue-700 font-semibold border border-blue-700 rounded-md hover:bg-blue-600 hover:text-white transform transition-all duration-300 py-3 px-4 sm:px-6"
            >
              Appointment
            </Link>
          </div>

          {/* Right Section */}
          <div className="w-full mb-5 sm:w-1/2 flex mr-[5rem] justify-self-start sm:justify-end mt-10 sm:mt-0">
            <ContactForm />
          </div>
        </div>

        <Touch />
        <CopyRight />
      </div>
    </>
  );
};

export default Contact;
