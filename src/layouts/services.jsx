import React from "react";
import Navbar from "../components/navbar";
import TopButtonsBanner from "../components/topButtonsBanner";
import ServiceC from "../components/ServicesComponent";
import CopyRight from "../components/copyright";
import Touch from "../components/touch";

const Services = () => {
  return (
    <>
      <div className="select-none">
        <TopButtonsBanner />
        <Navbar />
        <ServiceC />
        <Touch />
        <CopyRight />
        <div></div>
      </div>
    </>
  );
};

export default Services;
