import React from "react";
import Image from "next/image";

import custom1 from "../images/custom1.png";
import custom2 from "../images/custom2.png";
import custom3 from "../images/custom3.jpg";
import custom4 from "../images/custom4.jpg";

const Card = ({ title, description, image }) => {
  return (
    <div className="border-2 mx-auto w-full max-w-2xl rounded-lg p-6 shadow-lg mt-8">
      <div className="bg-white p-8 rounded-md h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="font-bold text-2xl mb-2 mt-2">{title}</h2>
            <p className="text-gray-700 mb-4 mt-2">{description}</p>
            <Image src={image} alt={title} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Choose = () => {
  const jobs = [
    {
      title: "Tailored UI design",
      description:
        "We personalize and craft UI designs based on each business's unique and specific requirements to ensure optimum customer satisfaction.",
      image: custom1,
    },
    {
      title: "Dedicated support",
      description:
        "We offer support to customers every step of the way with a team of dedicated professionals and ensure a seamless user experience.",
      image: custom2,
    },
    {
      title: "Seamless integration",
      description:
        "We enhance existing frameworks and seamlessly integrate advanced IT solutions to help businesses upscale their operations and systems.",
      image: custom3,
    },
    {
      title: "Reliable solutions",
      description:
        "We offer IT solutions that are crafted and tested based on years of experience and industry experience, thereby making them reliable.",
      image: custom4,
    },
  ];

  return (
    <div className="mt-10">
      <hr className="my-4 border-gray-300" />
      <div className="text-center mt-16">
        <h1 className="text-4xl mb-2">Why Choose Us?</h1>
        <p className="text-lg text-gray-600">
          Promoting business growth with our exceptional suite of products and
          services
        </p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {jobs.map((job, index) => (
          <Card
            key={index}
            title={job.title}
            description={job.description}
            image={job.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Choose;
