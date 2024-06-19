import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const Work = () => {
  return (
    <div className="py-10 max-w-[1200px] mx-auto" id="work">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl lg:text-4xl text-[#E6EBF5] mt-5 font-bold">
              My Latest <span>Projects</span>!
            </h2>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* project one here 2 COL VERSION*/}
          <a
            href="https://github.com/P541M/fresh-start"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-48 overflow-hidden rounded-xl shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={project6}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center filter blur-sm transition duration-200 group-hover:scale-105 brightness-50"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="text-white text-lg md:text-2xl font-semibold text-center">
                FreshStart
              </span>
            </div>
          </a>

          {/* project two here 1 COL VERSION*/}
          <a
            href="https://p541m.github.io/savory-sips/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-48 overflow-hidden rounded-xl shadow-lg md:h-80"
          >
            <img
              src={project5}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center filter blur-sm transition duration-200 group-hover:scale-105 brightness-50"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="text-white text-lg md:text-2xl font-semibold text-center">
                Savory Sips
              </span>
            </div>
          </a>

          {/* project three here 1 COL VERSION*/}
          <a
            href="https://github.com/P541M/Pool-Game-Simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-48 overflow-hidden rounded-lg shadow-xl md:h-80"
          >
            <img
              src={project1}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center filter blur-sm transition duration-200 group-hover:scale-105 brightness-50"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="text-white text-lg md:text-2xl font-semibold text-center">
                Pool Game Simulator
              </span>
            </div>
          </a>

          {/* project four here 2 COL VERSION*/}
          <a
            href="https://p541m.github.io/Metric-Imperial-Converter/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-48 overflow-hidden rounded-xl shadow-lg md:col-span-2 md:h-80 mb-7"
          >
            <img
              src={project4}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center filter blur-sm transition duration-200 group-hover:scale-105 brightness-50"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="text-white text-lg md:text-2xl font-semibold text-center">
                Metric & Imperial Converter
              </span>
            </div>
          </a>

          {/* project five here 2 COL VERSION*/}
          <a
            href="https://github.com/P541M/Comparative-Analysis-Infant-Names"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-48 overflow-hidden rounded-xl shadow-lg md:col-span-2 md:h-80 mb-7"
          >
            <img
              src={project2}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center filter blur-sm transition duration-200 group-hover:scale-105 brightness-50"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="text-white text-lg md:text-2xl font-semibold text-center">
                Comparative Analysis of Infant Names
              </span>
            </div>
          </a>

          {/* project six here 1 COL VERSION*/}
          <a
            href="https://github.com/P541M/Mancala-Game-CLI"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-48 overflow-hidden rounded-lg shadow-xl md:h-80"
          >
            <img
              src={project3}
              loading="lazy"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center filter blur-sm transition duration-200 group-hover:scale-105 brightness-50"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="text-white text-lg md:text-2xl font-semibold text-center">
                CLI Mancala Game
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
