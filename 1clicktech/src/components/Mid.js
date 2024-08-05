import React from "react";
import Image from "next/image";
import programmer from "../images/programmer.jpeg";

const Mid = () => {
  return (
    <div className="flex mt-12 px-4 pr-12">
      <Image
        src={programmer}
        alt="mid"
        className="w-1/2" // Adjust width as needed
      />
      <div className="mt-12 ml-4 max-w-lg">
        <h1 className="text-5xl font-bold mb-6">
          Blending Tech into Your Business Operations
        </h1>
        <p className="text-lg leading-relaxed">
          The current market scenario requires strategic planning and
          implementation of IT into the business operations. 1ClickTech
          seamlessly implements robust software solutions with an aim to
          optimise operational efficiency. The team of experts at 1ClickTech
          leverage technology to automate processes, and streamline tasks which
          enables teams to prioritise productivity and high-value activities.
          Backed by technology driven solutions and industry experience, as a
          digital transformation agency we aim to maximise productivity and
          accelerate business growth.
        </p>
        <button className="bg-custom-green mt-10 py-3 px-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-white">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Mid;
