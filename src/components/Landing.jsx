import React from "react";
import VideoBackground from "../video/video";
import "../App.css";

import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="container ">
      <header className="header " id="home">
        <div className="img-wrapper z-10 ">
          <VideoBackground
            className=" w-full h-full"
            alt="background"
          ></VideoBackground>
        </div>
        <div className="banner">
          <h1>Ai-Architect </h1>
          <p>AI Architecture: 24 Hours Floor Plans for Modern Houses</p>
          <button onClick={() => navigate("/studio")}>Draw Now</button>
        </div>
      </header>
    </div>
  );
};

export default Landing;
