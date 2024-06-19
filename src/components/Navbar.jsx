import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-20 text-[#E6EBF5] flex justify-center items-center max-w-auto mx-auto h-20 px-4 text-l bg-[#1A1B1D] sticky top-0 rounded-b-3xl">
      {/* For big screens */}
      <h1 className="text-xl font-bold primary-color p-5">PEGV</h1>
      <ul className="hidden md:flex font-normal">
        <li className="p-5">
          <a href="#home">Home</a>
        </li>
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#experience">Experience</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block md:hidden fixed top-4 right-4 z-30"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* For smaller screens */}
      <div
        className={
          nav
            ? "text-[#E6EBF5] fixed h-full left-0 top-0 w-auto bg-[#1A1B1D] duration-500 ease-in-out shadow-lg z-20"
            : "fixed left-[-100%] top-0 h-full ease-in-out duration-500 z-20"
        }
      >
        <ul className="pt-4 px-6 font-normal">
          <li className="py-2">
            <a href="#home" onClick={handleNav}>
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#about" onClick={handleNav}>
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#work" onClick={handleNav}>
              Work
            </a>
          </li>
          <li className="py-2">
            <a href="#experience" onClick={handleNav}>
              Experience
            </a>
          </li>
          <li className="py-2">
            <a href="#contact" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
