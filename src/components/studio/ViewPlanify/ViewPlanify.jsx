import React from "react";
import { useLocation } from "react-router-dom";
import TopNav from "../../TopNav";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import output from "./output.png";

export default function ViewPlanify(props) {
  const navigate = useNavigate();
  const location = useLocation();
  let deliveredMask = location.state.data; // wait to the response;
  let img = location.state.img; // wait to the response;
  console.log(deliveredMask);
  return (
    <>
      <TopNav></TopNav>
      <div className="view-plan-container flex flex-column justify-content-center items-center ">
        <h1> THis is the 2D image for your floor plan</h1>
        <img
          style={{ width: "630px", height: "630px " }}
          alt="image for"
          src={img}
        />
        <button
          className="btn btn-success w-64 h-20 fs-2 text-2xl mb-8 mt-0 "
          onClick={() => navigate("/scene", { state: deliveredMask })}
        >
          View 3D
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}
