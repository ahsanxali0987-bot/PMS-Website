import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
