import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <div className="articles" id="articles">
        <div className="section-heading">
          <h2 className="main-title">Articles</h2>
          <div className="underline"></div>
        </div>
        <div className="container">
          <div className="box">
            <img
              src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702468486/ssg9iozbotoya72tdxch.png"
              alt=""
            />
            <div className="content">
              <h3>3D Printing</h3>
              <p>
                How 3D printing technology can be used to tackle the global
                housing ?
              </p>
            </div>
            <div className="info">
              <Link>Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img
              src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702469747/djqoktokvzbzsrhnf6xz.png"
              alt=""
            />
            <div className="content">
              <h3>Artificial Intelligence</h3>
              <p>
                How can artificial intelligence revolutionize bioarchitecture?
              </p>
            </div>
            <div className="info">
              <Link>Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img
              src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702469746/y0g8jhekxztb5asdxtxo.png"
              alt=""
            />
            <div className="content">
              <h3>tools</h3>
              <p>
                10 textile and material libraries for 3D architectural modeling
              </p>
            </div>
            <div className="info">
              <Link>Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          <div className="box">
            <img
              src="https://res.cloudinary.com/daesz5k6b/image/upload/v1702469744/btu3fv9lo008eld9cq9x.png"
              alt=""
            />
            <div className="content">
              <h3>Technology</h3>
              <p>
                2024 Review: Innovations in Generative AI, AR/VR, Robotics, and
                Beyond
              </p>
            </div>
            <div className="info">
              <Link>Read More</Link>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
