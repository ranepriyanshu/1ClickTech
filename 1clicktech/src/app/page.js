// "use client";
// import React from "react";
// import Navbar from "@/components/Navbar";
// import Background from "@/components/Background";
// import Mid from "@/components/Mid";
// import JobList from "@/components/JobList";
// import Choose from "@/components/Choose";

// import Application from "@/components/Application";
// import Footer from "@/components/Footer";

// const page = () => {
//   return (
//     <div className="relative">
//       <Background />
//       <Navbar />
//       <Mid />
//       <JobList />
//       <Choose />
//       <Application />
//       <Footer />
//     </div>
//   );
// };

// export default page;

// // "use client";

// // import React, { useRef } from "react";
// // import Navbar from "@/components/Navbar";
// // import Background from "@/components/Background";
// // import Mid from "@/components/Mid";
// // import JobList from "@/components/JobList";
// // import Choose from "@/components/Choose";
// // import Application from "@/components/Application";
// // import Footer from "@/components/Footer";
// // import Form from "@/components/Form";

// // const Page = () => {
// //   const jobListRef = useRef(null);
// //   const formRef = useRef(null);

// //   return (
// //     <div className="relative">
// //       <Navbar />
// //       <Background jobListRef={jobListRef} />
// //       <Mid />
// //       <JobList jobListRef={jobListRef} formRef={formRef} />
// //       <Choose />
// //       <Application />
// //       <Form ref={formRef} />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Page;

"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Mid from "@/components/Mid";
import JobList from "@/components/JobList";
import Choose from "@/components/Choose";
import Application from "@/components/Application";
import Footer from "@/components/Footer";

const Page = () => {
  const jobListRef = useRef(null);

  return (
    <div className="relative">
      <Background jobListRef={jobListRef} />
      <Navbar />
      <Mid />
      <JobList ref={jobListRef} />
      <Choose />
      <Application />
      <Footer />
    </div>
  );
};

export default Page;
