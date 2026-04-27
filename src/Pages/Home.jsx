import React from "react";
import LandingPage from "../Components/Home/LandingPage";
import Technology from "../Components/Home/Technology";
import Solutions from "../Components/Home/Solutions";
import Benifits from "../Components/Home/Benifits";
import Plans from "../Components/Home/Plans";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#cdd9ea] to-[#e5feff]">
      {/* LandingPage */}
      <LandingPage />

      {/* Technology */}
      <Technology />

      {/* Solutions */}
      <Solutions />

      {/* Benifits */}
      <Benifits />

      {/* Plans */}
      <Plans />

    </div>
  );
};

export default Home;
