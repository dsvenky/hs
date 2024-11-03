import React from "react";
import Navbar from "../components/navbar";
import TopButtonsBanner from "../components/topButtonsBanner";
import { AppointmentForm } from "../components/forms";
import CopyRight from "../components/copyright";
import Touch from "../components/touch";

const Appointment = () => {
  return (
    <>
      <div className="bg-blue-100 min-h-screen select-none flex flex-col">
        <TopButtonsBanner />
        <Navbar />

        {/* Main content container */}
        <div className="flex-grow flex flex-col text-blue-950 items-center justify-center select-none px-4 py-6 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Schedule Your Appointment
          </h1>
          <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl   rounded-lg p-6">
            <AppointmentForm />
          </div>
        </div>

        {/* Footer components */}
        <Touch />
        <CopyRight />
      </div>
    </>
  );
};

export default Appointment;
