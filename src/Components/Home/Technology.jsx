import React from "react";

const Technology = () => {
  return (
    <div className="py-14">
      <div className="flex flex-col gap-[15px] text-center">
        <h1 className="text-[30px] text-[#0FC8CA] font-[600] leading-[30px]">
          Future-Proof <span className="text-black">Technology</span> for Modern
          Business.
        </h1>
        <p className="text-[16px] text-[#1C1B1F80] font-[400]  leading-[25px]">
          Built on a lightning-fast, enterprise-grade tech stack. CodesVista PMS
          delivers the speed and <br /> security your business deserves, without
          the technical complexity
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-[30px]">
        <img src="maintain.png" alt="" className="w-[150px] h-[95px]" />
        <img src="ecomva.png" alt="" className="w-[140px] h-[95px]" />
        <img src="react.png" alt="" className="w-[110px] h-[95px]" />
        <img src="google.png" alt="" className="w-[130px] h-[95px]" />
        <img src="aws.png" alt="" className="w-[130px] h-[95px]" />
        <img src="uptick.png" alt="" className="w-[150px] h-[95px]" />
        <img src="reactfactory.png" alt="" className="w-[160px] h-[95px]" />
      </div>
    </div>
  );
};

export default Technology;
