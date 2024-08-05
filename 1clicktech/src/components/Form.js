// import React from "react";
// import React, { forwardRef } from "react";

// const Form = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-bold mb-6">Application Form</h2>
//       <form>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="col-span-1">
//             <label className="block text-gray-700">First Name</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="First Name"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Last Name</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Last Name"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Mail ID</label>
//             <input
//               type="email"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Mail ID"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">College</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="College"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Branch</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Branch"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Graduation Year</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Graduation Year"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Experience</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Experience"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Current CTC</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Current CTC"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Expected CTC</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Expected CTC"
//             />
//           </div>
//           <div className="col-span-1">
//             <label className="block text-gray-700">Portfolio Link</label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//               placeholder="Portfolio Link"
//             />
//           </div>
//           <div className="col-span-1 md:col-span-2">
//             <label className="block text-gray-700">Resume Upload</label>
//             <input
//               type="file"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//         </div>
//         <div className="mt-6">
//           <button
//             type="submit"
//             className=" w-full bg-custom-green mt-10 py-3 px-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-white"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10"
    >
      <h2 className="text-2xl font-bold mb-6">Application Form</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="First Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Mail ID</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Mail ID"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">College</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="College"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Branch</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Branch"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Graduation Year</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Graduation Year"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Experience</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Experience"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Current CTC</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Current CTC"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Expected CTC</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Expected CTC"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700">Portfolio Link</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              placeholder="Portfolio Link"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700">Resume Upload</label>
            <input
              type="file"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-custom-green mt-10 py-3 px-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
});

export default Form;
