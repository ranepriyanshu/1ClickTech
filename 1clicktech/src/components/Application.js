import React from "react";
import Form from "./Form";

const Application = () => {
  return (
    <div className="mt-20 mb-20">
      <hr className="my-4 border-gray-300" />
      <div className="mt-20 max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Wanna Join Us?</h1>
          <h2 className="text-2xl text-gray-700 mb-6">
            Share your Resume with Us
          </h2>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Application;
