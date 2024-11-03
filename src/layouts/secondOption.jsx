import React from "react";
import TopButtonsBanner from "../components/topButtonsBanner";
import Navbar from "../components/navbar";
const SecondOption = () => {
  return (
    <>
      <div className="select-none">
        <TopButtonsBanner />
        <Navbar />
        <div>SecondOption</div>
      </div>
    </>
  );
};

export default SecondOption;
