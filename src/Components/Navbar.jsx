import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky left-0 right-0 top-5 z-50">
      <div className="w-[700px] h-[80px] bg-[#F5F5F580] flex items-center justify-between px-14 rounded-full m-auto">
        <div className="">
          <img src="Logo.png" alt="Logo" className="w-14 h-14" />
        </div>
        <div className="h-[30px] w-[320px] flex items-center justify-between px-3">
          <Link to="/home">
            <p className="text-[15px] font-[500]">Home</p>
          </Link>
          <Link to="/services">
            <p className="text-[15px] font-[500]">Service</p>
          </Link>
          <Link to="/plans">
            <p className="text-[15px] font-[500]">Plans</p>
          </Link>
        </div>
        <div className="w-[100px] h-[40px] bg-[#FFFFFF] flex items-center justify-center rounded-xl hover:shadow-lg">
          <p className="text-[#1C1B1F] text-[12px] font-[700] cursor-pointer">
            Contact Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
