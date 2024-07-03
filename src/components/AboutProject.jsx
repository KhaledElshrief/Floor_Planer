import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";
const AboutProject = () => {
  return (
    <>
      <TopNav />
      <div className="w-full bg-white py-16 px-4">
        <h1 className="text-[#e2b646] font-bold text-5xl text-center mb-5">
          Hi, We are Floor Planner!
        </h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[550px] mx-auto my-4"
            alt=""
            src="https://res.cloudinary.com/daesz5k6b/image/upload/v1703099539/e44wrhnpjcthq8efq5h1.png"
          />
          <div className="flex flex-col justify-center">
            <h2 className="md:text-4xl sm:text-3xl text-3xl font-bold py-2 ">
              Brief About Us
            </h2>
            <p className="text-2xl text-gray-600 mt-2 mb-5 mr-4">
              We have made it our job to bring the power of architectural
              visualizations to everyone who doesn't know how or doesn't want to
              work with advanced 3D CAD software. We have built a platform based
              around a lightweight floor plan editor that runs in every browser
              without the need for additional downloads or plug-ins. This
              editor, combined with powerful cloud-based rendering, gives our
              users the ability to make great-looking architectural
              visualizations within minutes - from any device - for a fraction
              of the cost or learning curve of traditional CAD software.
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md my-6 text-lg font-medium mx-auto md:mx-0 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutProject;
