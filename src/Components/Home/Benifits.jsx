import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import { TbLayoutGrid } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";

const benefits = [
  {
    icon: <FiCheckSquare size={28} className="text-[#25889d]" />,
    title: "Multi-Industry Flexibility",
    description:
      "Whether you manage a school, a restaurant, our modular architecture adapts to your specific workflow. Toggle industry-specific features instantly without paying for tools you don't need.",
  },
  {
    icon: <FaRegCheckCircle size={28} className="text-[#25889d]" />,
    title: "Granular Access Control",
    description:
      "Protect your sensitive data by assigning custom permissions to staff members. Ensure everyone has exactly the tools they need and nothing more.",
  },
  {
    icon: <FaArrowPointer size={28} className="text-[#25889d]" />,
    title: "Billing & Invoicing",
    description:
      "Automate your entire revenue cycle with integrated subscription management and recurring billing. Reduce manual errors and get paid faster.",
  },
  {
    icon: <TbLayoutGrid size={28} className="text-[#25889d]" />,
    title: "Data-Driven Insights",
    description:
      "Make smarter decisions with a comprehensive Super Admin dashboard. Monitor occupancy rates, student enrollment, or daily sales across multiple branches in real-time through intuitive visual reports.",
  },
];

const Benefits = () => {
  return (
    <div className="py-20 px-6">
      {/* Badge */}
      <div className="border border-white rounded-3xl py-[5px] px-4 w-fit mx-auto bg-[#f5f5f5] mb-6">
        <p className="text-[#1C1B1F] text-[14px] font-[500] flex items-center gap-2">
          <CiCircleCheck className="text-[#25889d]" />
          KEY BENEFITS
        </p>
      </div>

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-[30px] md:text-[34px] text-[#1C1B1F] font-[700] leading-tight">
          Everything You Need to <span className="text-[#0FC8CA]">Scale,</span>{" "}
          All in <span className="text-[#0FC8CA]">One Place.</span>
        </h2>
      </div>

      {/* Para */}
      <p className="text-center text-[#595f62] text-[18px] font-[450] leading-[26px] mx-auto mb-14">
        Ditch the messy spreadsheets and fragmented apps. CodesVista PMS
        provides a unified ecosystem <br />
        designed to automate your operations and maximize your revenue.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] border border-white rounded-2xl p-4 flex flex-col gap-4 hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center">
              <p className="bg-[#d6eef3] border border-white rounded-xl w-fit p-3 ">
                {item.icon}
              </p>
            </div>

            {/* Title */}
            <h3 className="text-[#1C1B1F] text-[16px] font-[600] leading-snug text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-[13px] leading-[22px] font-[400] text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
