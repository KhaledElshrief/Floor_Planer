import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home.jsx";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword.jsx";
import Team from "./components/Team.jsx";
import ContactUs from "./components/ContactUs.jsx";
import AboutProject from "./components/AboutProject.jsx";
import ViewPlanify from "./components/studio/ViewPlanify/ViewPlanify.jsx";
import Studio from "./components/studio/planify-pixi.js";
import Scene from "./components/ThreeD/Scene.jsx";
import Designs from "./components/Designs.jsx";
import UserProfile from "./components/UserProfile.jsx";
function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/ViewPlanify" element={<ViewPlanify />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/scene" element={<Scene />} />
          <Route path="/design" element={<Designs />} />
          <Route path="/userprofile" element={<UserProfile  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
