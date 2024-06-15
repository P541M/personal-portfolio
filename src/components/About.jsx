import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="py-10 text-[#E6EBF5] bg-[#1A1B1D] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto my-7">
        <div>
          <div className="w-[400px] h-full shadow-lg">
            <img
              src={aboutImg}
              alt=""
              className="object-cover rounded-xl h-[400px]"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-[#E6EBF5] my-3">
              <h3 className="text-4xl font-bold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7  mx-auto font-medium">
                Hey there! I'm Psalm <span>Eleazar</span> Gamilo Videna (call me Ellie!)
                and welcome to my site! I'm a passionate software engineering
                student based in the vibrant Greater Toronto Area. I specialize
                in full stack development, enjoying both crafting beautiful,
                user-friendly interfaces and building robust backend systems.
                When I'm not immersed in code, you might find me powerlifting at
                the gym, smashing birdies on the badminton court, or lost in a
                good book.
              </p>
            </div>
          </div>

          <div className="flex mt=10 items-center gap-7">
            <div className="bg-[#141517] p-5 rounded-xl shadow-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-[#E6EBF5]">
                15
                <span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>

            <div className="bg-[#141517] p-5 rounded-xl shadow-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-[#E6EBF5]">
                2<span>+</span> Years
              </h3>
              <p>
                <span className="md:text-base text-xs">Coding Experience</span>
              </p>
            </div>

            {/* <div className="bg-[#0B0C0E]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-[#E6EBF5]">
                4<span>+</span> Years
              </h3>
              <p>
                <span className="md:text-base text-xs">Powerlifting Experience</span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
