import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { team } from "../data/data";
import { Link } from "react-router-dom";

import "../App.css";

function Team() {
  console.log(team);
  return (
    <>
      <TopNav />

      <section className="team" id="team">
        {team.map((t) => {
          return (
            <div key={t.id} className="cards-wrapper">
              <div key={t.id} className="card" data-tilt>
                <div className="card-img-wrapper">
                  <img src={t.image} alt="Frontend developer" />
                </div>
                <div className="card-info">
                  <h2>{t.name}</h2>
                  <h3>{t.text}</h3>
                  <p>{t.description}</p>
                  <Link to={t.link}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default Team;
