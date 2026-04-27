import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-[#ebf0f1] py-20 border-4 border-b-white">
      {/* Heading */}
      <div className="border border-[#25889D] rounded-xl py-[1px] px-3 w-fit mb-16 mx-auto">
        <span className="text-[#1C1B1F80] text-[11.5px] font-[500]">
          {" "}
          BUSINESS MANAGMENT TOOL
        </span>
      </div>

      {/* Description */}
      <div
        className="flex flex-col gap-1
      "
      >
        <h1 className="text-[90px] text-[#0FC8CA] font-[500] text-center w-[950px] mx-auto leading-[79px]">
          Manage{" "}
          <span className="text-[#1C1B1F]">Your Business Presence with</span>{" "}
          <span className="bg-gradient-to-r from-[#00D492] to-[#00BCFF] bg-transparent bg-clip-text">
            Codes Vista
          </span>
        </h1>
        <p className="text-[18px] text-[#1C1B1F80] text-center mx-auto w-[530px]">
          Ultrices quam quam fusce ultrices convallis. Ac neque aenean nibh
          pellentesque at at. Quis vel eleifend morbi quis mauris enim venenatis
          mi aenean.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-[300px] justify-between flex mx-auto mt-10">
        {/* Plan Buttons */}
        <button className="w-[100px] h-[55px] text-white bg-[#25889D] hover:shadow-xl rounded-xl">
          Buy A Plan
        </button>

        {/* Video Button */}
        <button className="w-[190px] h-[55px] bg-transparent border border-[#4f5053] text-[#25889D] hover:text-black hover:bg-[#25889D] rounded-xl duration-700">
          Watch Demo Video
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
