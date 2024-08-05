import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.svg";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-40 h-18 py-4 px-3 text-white z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </div>
        <div>
          <ul className="flex justify-around space-x-32 text-white text-lg">
            <a
              href="https://1click.tech/services/devops"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li className="hover:underline cursor-pointer">Services</li>
            </a>
            <a
              href="https://1click.tech/products/auction"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li className="hover:underline cursor-pointer">Products</li>
            </a>
            <a
              href="https://1click.tech/about-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li className="hover:underline cursor-pointer">About Us</li>
            </a>
            <a
              href="https://1click.tech/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="hover:underline cursor-pointer">Contact</li>
            </a>
            <li className="hover:underline cursor-pointer">Careers</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
