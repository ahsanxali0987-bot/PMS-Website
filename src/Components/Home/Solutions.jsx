import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";

const SolutionData = [
  {
    image: "restaurant.png",
    title: "Restaurant Management",
    description:
      "Master your floor plan, digital menu, and lightning-fast POS billing.",
    buttonText: "View Features",
  },
  {
    image: "utility.png",
    title: "Utility Store PMS",
    description:
      "Optimize stock levels with barcode scanning and automated low-stock alerts.",
    buttonText: "View Features",
  },
  {
    image: "shop.png",
    title: "Mobile Shop Management",
    description:
      "Track IMEIs, manage multi-brand inventory, and automate repair tracking easily.",
    buttonText: "View Features",
  },
  {
    image: "realstate.png",
    title: "Real Estate PMS",
    description:
      "List properties, manage client leads, track rental income, and streamline lease agreements.",
    buttonText: "View Features",
  },
  {
    image: "school.png",
    title: "School PMS",
    description:
      "Manage student admissions, fee collections, and digital attendance in one place.",
    buttonText: "View Features",
  },
];

const Solutions = () => {
  return (
    <div className="py-16">
      {/* Header badge */}
      <div className="border border-white rounded-3xl py-[5px] px-4 w-fit mx-auto bg-[#f5f5f5] mb-4">
        <p className="text-[#1C1B1F] text-[14px] font-[500] flex items-center gap-2">
          <CiCircleCheck />
          OUR SOLUTIONS
        </p>
      </div>

      {/* Section heading */}
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-[32px] text-[#1C1B1F] font-[650] leading-[30px] flex gap-2 justify-center">
          Tailored
          <span className="text-[#0FC8CA]">Management</span>For Every
          <span className="text-[#0FC8CA]">Industry</span>
        </h2>

        {/* Section description */}
        <p className="text-gray-500 text-[17px] font-[400] leading-[25px]">
          From hospitality to education, CodesVista PMS provides specialized
          modules built to handle the <br /> unique challenges of your business
          sector.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6 mt-10 px-16">
        {SolutionData.map((item, index) => (
          <div
            className="bg-[#e6eff4] p-4 rounded-xl border border-white"
            key={index}
          >
            {/* Icon */}
            <div className="bg-[#cae3ea] rounded-lg w-fit p-4 border border-white">
              <img
                src={item.image}
                alt={`${item.title} icon`}
                className="w-14 h-14"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[10px] mt-2">
              {/* title*/}
              <h3 className="text-[18px] text-[#1C1B1F] font-[600]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="w-full text-gray-500 text-[13px] leading-[20px] font-[400]">
                {item.description}
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-end pt-12">
              <button className="rounded-md hover:shadow-lg transition duration-300 mt-4 px-7 py-[6px] bg-[#25889d] text-white text-[12px] font-[700]">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="border border-[#b5eaef] rounded-xl bg-[#c8edf3] hover:border-white hover:shadow-lg transition duration-300 mx-auto w-fit mt-24 px-7 py-4 flex flex-col sm:flex-row gap-5 justify-between items-center">
        <div className="flex gap-4 items-center">
          {/* Icon */}
          <span className="text-[#25889d]">
            <SiTicktick size={20} />
          </span>

          {/* Content */}
          <div>
            {/* Heading */}
            <h3 className="text-[17px] text-[#25889d] font-[600]">
              Ready to leave the spreadsheets behind?
            </h3>

            {/* paragraph */}
            <p className="text-[13px] text-[#889fa5] font-[400]">
              Empower your team with the tools they need to manage more, in less
              time.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="rounded-md bg-[#25889d]  text-white text-[15px] font-[600] px-6 py-2">
          Get started now
        </button>
      </div>
    </div>
  );
};

export default Solutions;
