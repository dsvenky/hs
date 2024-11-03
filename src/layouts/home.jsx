import React from "react";
import Navbar from "../components/navbar";
import DoctorsCard from "../components/doctorCards";
import WhyweChoose from "../components/whywechoose";
import SemiAutoLoop from "../components/semiAutoLoop";
import Banner from "../components/banner";
import TopButtonsBanner from "../components/topButtonsBanner";
import img from "../assets/bg-image.jpg";
import Touch from "../components/touch";
import CopyRight from "../components/copyright";

const Homepage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed select-none"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-20">
        {" "}
        {/* Increase z-index */}
        <TopButtonsBanner />
        <Navbar />
      </div>

      <div className="relative  ">
        <Banner />
        <DoctorsCard />
        <WhyweChoose />
        <SemiAutoLoop />
        {<Touch />}
        <CopyRight />
      </div>
    </div>
  );
};

export default Homepage;
