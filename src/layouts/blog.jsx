import React from "react";
import Navbar from "../components/navbar";
import TopButtonsBanner from "../components/topButtonsBanner";
import CopyRight from "../components/copyright";
// import CustomNav from "../components/customNav";
// import SocialIcons from "../components/socialIcons";

const Blog = () => {
  return (
    <>
      <div className="select-none">
        <TopButtonsBanner />

        <Navbar />
        <div>Blog</div>
        {/* <SocialIcons /> */}
        {/* <CustomNav /> */}

        <CopyRight />
      </div>
    </>
  );
};

export default Blog;
