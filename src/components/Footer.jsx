import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1A1B1D] mt-12 w-max-[800px]  text-center p-2">
      <p className=" text-gray-500">That's it!</p>
      <button
        onClick={scrollToTop}
        className="p-1 px-4  bg-[#202327] text-white rounded-xl hover:bg-gray-600 transition-colors duration-200"
      >
        Back to Top
      </button>
    </div>
  );
};

export default Footer;
