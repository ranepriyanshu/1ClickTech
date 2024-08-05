import React, { forwardRef } from "react";

const JobCard = ({ title, experience, location, description }) => {
  return (
    <div className="border-2 border-custom-green mx-auto w-full max-w-6xl rounded-lg p-4 shadow-lg mt-6">
      <div className="bg-white p-6 rounded-md">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-2xl mb-1">{title}</h2>
            <h3 className="text-lg text-gray-600 mb-1">{experience}</h3>
            <p className="text-gray-500 mb-2">{location}</p>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="flex items-center mt-8">
            <button className="bg-custom-green px-4 py-2 rounded-lg shadow-md transition-colors duration-500 hover:bg-white">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobList = forwardRef((props, ref) => {
  const jobs = [
    {
      title: "Frontend Developer",
      experience: "Fresher",
      location: "Remote",
      description:
        "We are looking for a skilled frontend developer to join our team.",
    },
    {
      title: "Backend Developer",
      experience: "4+ year experience",
      location: "New York, NY",
      description: "Join our backend team to work on exciting new projects.",
    },
    {
      title: "Software Developer Intern",
      experience: "intern",
      location: "Gurugram, NCR, India",
      description: "Join our team to work on exciting new projects.",
    },
    // Add more job objects as needed
  ];

  return (
    <div ref={ref} className="mt-10 ">
      <hr className="my-4 border-gray-300"></hr>

      <div className="p-6">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            experience={job.experience}
            location={job.location}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
});

export default JobList;
