/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../App.css";
const Features = () => {
  return (
    <div className="w-full bg-white" id="about-us">
      <section class="about-us" id="about-us">
        <div class="section-header">
          <h1 class="section-heading">Our Features</h1>
          <div class="underline"></div>
        </div>
        <div class="services">
          <div class="service">
            <div class="service-header">
              <i class="fas fa-pen-nib"></i>
              <h3>Interior Walls</h3>
            </div>
            <p class="service-text">
              Partitions within a building that divide the interior space into
              rooms, corridors, and other functional areas. These walls serve
              several purposes in residential buildings
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-paint-roller"></i>
              <h3>Exterior Walls </h3>
            </div>
            <p class="service-text">
              The boundary walls that rounds the outside of the plan , make the
              perfect shape of the plan with doors and windows for real world
              plan
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-pencil-alt"></i>
              <h3>Design</h3>
            </div>
            <p class="service-text">
              Design inspirations, featuring a diverse range of architectural
              styles, interior designs, and landscaping ideas. for better
              designs and templates
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-paint-brush"></i>
              <h3>Decoration</h3>
            </div>
            <p class="service-text">
              Decoration of their floor plans by providing a wide range of
              options for furniture, lighting fixtures, decor items, and
              finishes.
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="fas fa-ruler-combined"></i>
              <h3>Measurement</h3>
            </div>
            <p class="service-text">
              Accurately measure distances, areas, and angles within the floor
              plan,for ensuring that the design meets building codes and
              regulations.
            </p>
          </div>
          <div class="service">
            <div class="service-header">
              <i class="far fa-building"></i>
              <h3>3D Visualization</h3>
            </div>
            <p class="service-text">
              visualize their floor plans in 3D, providing a more immersive and
              realistic representation of the final design.helps clients better
              understand the spatial layout
            </p>
          </div>
          <div class="about-us-img-wrapper">
            <img
              alt="logo"
              src="https://res.cloudinary.com/daesz5k6b/image/upload/v1706480246/kbisczlfdbvdutp3dwqn.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
