import React from "react";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 top-5 z-50">
      <div className="w-[700px] h-[80px] bg-[#F5F5F580] flex items-center justify-between px-14 rounded-full m-auto">
        <div className="">
          <img src="Logo.png" alt="Logo" className="w-14 h-14" />
        </div>
        <div className="h-[30px] w-[320px] flex items-center justify-between px-3">
          <p className="text-[15px] font-[500]">Home</p>
          <p className="text-[15px] font-[500]">Service</p>
          <p className="text-[15px] font-[500]">Plans</p>
        </div>
        <div className="w-[100px] h-[40px] bg-[#FFFFFF] text-[#1C1B1F] text-[12px] font-[700] flex items-center justify-center rounded-xl hover:shadow-lg cursor-pointer">
          <p className="">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
