import React from "react";

const Experience = () => {
  return (
    <div className="py-10 bg-[#1A1B1D]" id="experience">
      <h2 className="mb-8 text-3xl text-[#E6EBF5] text-center">
        My <span>Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-10">
        {/* Job one here */}
        <div className="relative mb-[20px] text-[#E6EBF5] mx-auto max-w-[300px] sm:max-w-[600px]">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#86A6E7] via-[#113A8D] to-[#145EF3] rounded-3xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
          <div className="relative bg-[#202327] p-4 rounded-3xl">
            <p className="text-xl">
              <span>Logistics Firm</span>
            </p>
            <p className="text-[#E6EBF5]">Fullstack Developer & Business Analyst Intern</p>
            <p className="text-gray-500 font-semibold">
              May 2024 - Present
            </p>
          </div>
        </div>

        {/* Job two here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg">
          <p className="text-xl">
            <span>MediaMatchup</span>
          </p>
          <p className="text-[#E6EBF5]">Founder & CEO</p>
          <p className="text-gray-500 font-semibold">
          Jun 2021 - Aug 2023
          </p>
        </div>


        {/* Job two here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg">
          <p className="text-xl">
            <span>Videna Visuals</span>
          </p>
          <p className="text-[#E6EBF5]">Digital Content Editor & Digital Graphic Designer</p>
          <p className="text-gray-500 font-semibold">
            Jan 2017 - Jan 2023
          </p>
        </div>

        {/* Job three here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg">
          <p className="text-xl">
            <span>Im a Mortal</span>
          </p>
          <p className="text-[#E6EBF5]">Podcast Sound Engineer</p>
          <p className="text-gray-500 font-semibold">
            Jan 2022 - May 2022
          </p>
        </div>

        {/* Job four here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg">
          <p className="text-xl">
            <span>Seeds of Diversity Canada</span>
          </p>
          <p className="text-[#E6EBF5]">
            Digital Contect Producter & Front-End Developer
          </p>
          <p className="text-gray-500 font-semibold">
            Jan 2022 - May 2022
          </p>
        </div>

        {/* Job six here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg">
          <p className="text-xl">
            <span>Hero Certified Burgers</span>
          </p>
          <p className="text-[#E6EBF5]">Crew Member</p>
          <p className="text-gray-500 font-semibold">
            Jun 2019 - Aug 2019
          </p>
        </div>
      </div>
    </div>
  );
};

//<div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>

export default Experience;
