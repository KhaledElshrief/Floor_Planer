import React from "react";
import "../App.css";
import TopNav from "./TopNav";
import Features from "./Features";
import Footer from "./Footer";
import Landing from "./Landing";
import Articles from "./Articles";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Landing />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
