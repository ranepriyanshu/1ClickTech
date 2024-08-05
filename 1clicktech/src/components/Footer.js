import React from "react";
import logo from "../images/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Together, let's transform your management system with agility,
              reliability, and transparency.
            </h2>

            <a
              href="#"
              className="mt-4 inline-block bg-custom-green text-black  py-2 px-6 rounded hover:bg-white"
            >
              Let’s execute your visions
            </a>
          </div>
        </div>
        <hr className="border-gray-700 mb-8" />

        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6 md:mb-0 ">
            {/* <Image src={logo} alt="Logo" width={40} height={40} /> */}
            <h3 className="text-lg font-bold text-custom-green flex">
              {" "}
              <Image src={logo} alt="Logo" width={30} height={30} /> 1ClickTech
            </h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.994 4.568c-.875.39-1.815.654-2.802.774 1.008-.602 1.785-1.555 2.151-2.693-.943.56-1.986.965-3.1 1.184-.89-.95-2.163-1.545-3.567-1.545-2.7 0-4.885 2.21-4.885 4.936 0 .387.042.764.125 1.126-4.06-.205-7.665-2.152-10.086-5.118-.42.725-.66 1.565-.66 2.463 0 1.7.852 3.2 2.147 4.08-.79-.026-1.532-.244-2.182-.607v.062c0 2.37 1.657 4.343 3.858 4.788-.404.11-.83.171-1.27.171-.31 0-.613-.03-.91-.086.61 1.926 2.383 3.328 4.482 3.367-1.644 1.292-3.714 2.062-5.965 2.062-.387 0-.772-.022-1.15-.066 2.13 1.373 4.653 2.176 7.363 2.176 8.84 0 13.67-7.358 13.67-13.738 0-.21-.005-.42-.014-.63.94-.687 1.76-1.54 2.4-2.515z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.428 2.833C18.698 2.308 17.692 2 16.667 2H7.333C6.308 2 5.302 2.308 4.572 2.833A4.8 4.8 0 003 7.333v9.334c0 1.056.351 2.04.971 2.833.73.524 1.736.833 2.762.833h9.334c1.025 0 2.03-.309 2.76-.833.62-.793.971-1.777.971-2.833V7.333a4.8 4.8 0 00-1.905-4.5zm-8.714 13.667a5 5 0 110-10 5 5 0 010 10zm6.667-7.333a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.014-.607 1.795-1.57 2.163-2.724-.949.563-2.001.974-3.12 1.194-.897-.956-2.176-1.55-3.59-1.55-2.713 0-4.914 2.21-4.914 4.932 0 .387.043.764.127 1.126-4.083-.205-7.702-2.156-10.126-5.132-.423.727-.666 1.57-.666 2.475 0 1.707.87 3.213 2.188 4.096-.808-.026-1.57-.248-2.234-.617v.062c0 2.384 1.69 4.374 3.932 4.825-.41.111-.844.171-1.29.171-.314 0-.617-.03-.916-.087.621 1.94 2.421 3.353 4.555 3.394-1.668 1.307-3.764 2.086-6.04 2.086-.393 0-.779-.022-1.162-.066 2.138 1.375 4.68 2.178 7.41 2.178 8.883 0 13.744-7.368 13.744-13.748 0-.21-.006-.42-.015-.63.943-.687 1.76-1.54 2.4-2.515z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.446 3.027c-.897.398-1.862.667-2.87.787a5.002 5.002 0 002.188-2.748 10.11 10.11 0 01-3.127 1.198 4.928 4.928 0 00-8.386 4.493 13.991 13.991 0 01-10.174-5.172 4.92 4.92 0 001.524 6.568 4.936 4.936 0 01-2.228-.618v.063a4.933 4.933 0 003.946 4.83 4.978 4.978 0 01-2.221.084 4.935 4.935 0 004.61 3.417 9.907 9.907 0 01-6.135 2.112c-.398 0-.79-.023-1.175-.069a14.004 14.004 0 007.576 2.219c9.096 0 14.073-7.532 14.073-14.073 0-.213-.005-.426-.014-.637a10.073 10.073 0 002.481-2.574z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-custom-green">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://1click.tech/services/devops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  DevOps
                </a>
              </li>
              <li>
                <a
                  href="https://1click.tech/services/saas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Saas
                </a>
              </li>
              <li>
                <a
                  href="https://1click.tech/services/ai-ml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  AI/ML Integration
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-custom-green">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  1Click Auction
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  1Click CRM
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  1Click OTES
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  1Click LMS
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-custom-green">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5">
            <h3 className="text-lg font-bold text-custom-green">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; 2024 1ClickTech Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
