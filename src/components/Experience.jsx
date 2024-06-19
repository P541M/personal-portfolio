import React from "react";

const Experience = () => {
  return (
    <div className="py-10 bg-[#1A1B1D] " id="experience">
      <h3 className="text-4xl font-bold text-[#E6EBF5] text-center mb-8 ">
        <span>Where</span> I've Been Busy!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-10">
        {/* Job one here */}
        <div className="relative mb-[20px] text-[#E6EBF5] mx-auto w-full max-w-[300px] sm:max-w-[600px] h-full">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#86a6e7] via-[#2D487D] to-[#0CE9CB] rounded-3xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
          <div className="relative bg-[#202327] p-4 rounded-3xl h-full">
            <p className="text-xl font-bold text-center">
              <span>Logistics Firm</span>
            </p>
            <p className="text-[#E6EBF5] font-semibold text-center">
              Fullstack Dev & Business Analyst Intern
            </p>
            <p className="text-gray-500 font-medium text-center">
              May 2024 - Present
            </p>
          </div>
        </div>

        {/* Job two here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl w-full max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg h-full">
          <p className="text-xl font-bold text-center">
            <span>MediaMatchup</span>
          </p>
          <p className="text-[#E6EBF5] font-semibold text-center">
            Founder & CEO
          </p>
          <p className="text-gray-500 font-medium text-center">
            Jun 2021 - Aug 2023
          </p>
        </div>

        {/* Job three here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl w-full max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg h-full">
          <p className="text-xl font-bold text-center">
            <span>Videna Visuals</span>
          </p>
          <p className="text-[#E6EBF5] font-semibold text-center">
            Video Editor & Graphic Designer
          </p>
          <p className="text-gray-500 font-medium text-center">
            Jan 2017 - Jan 2023
          </p>
        </div>

        {/* Job four here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl w-full max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg h-full">
          <p className="text-xl font-bold text-center">
            <span>Im a Mortal</span>
          </p>
          <p className="text-[#E6EBF5] font-semibold text-center">
            Podcast Sound Engineer
          </p>
          <p className="text-gray-500 font-medium text-center">
            Jan 2022 - May 2022
          </p>
        </div>

        {/* Job five here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl w-full max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg h-full">
          <p className="text-xl font-bold text-center">
            <span>Seeds of Diversity Canada</span>
          </p>
          <p className="text-[#E6EBF5] font-semibold text-center">
            Video Editor & Frontend Dev
          </p>
          <p className="text-gray-500 font-medium text-center">
            Jan 2022 - May 2022
          </p>
        </div>

        {/* Job six here */}
        <div className="mb-[20px] text-[#E6EBF5] bg-[#202327] p-4 rounded-3xl w-full max-w-[300px] sm:max-w-[600px] mx-auto shadow-lg h-full">
          <p className="text-xl font-bold text-center">
            <span>Hero Certified Burgers</span>
          </p>
          <p className="text-[#E6EBF5] font-semibold text-center">
            Crew Member
          </p>
          <p className="text-gray-500 font-medium text-center">
            Jun 2019 - Aug 2019
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
