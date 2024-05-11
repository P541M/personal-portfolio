import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-10 text-[#E6EBF5] flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold primary-color ml-4">ELEAZAR</h1>
      <ul className="hidden md:flex">
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

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 text-[#E6EBF5] fixed h-full left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#1F2022]  duration-500  ease-in-out"
            : "z-10 fixed left-[-100%] top-0  h-full ease-in-out duration-500"
        }
      >
        <h1 className="text-3xl primary-color m-4">Eleazar</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#home">Home</a>
          </li>
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
