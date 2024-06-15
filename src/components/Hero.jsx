import React, { useRef, useEffect } from "react";
import profilepic from "../assets/logo.png";
import resume from "../assets/Resume.pdf";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (imageRef.current) {
        const { clientX, clientY } = event;
        const { left, top, width, height } =
          imageRef.current.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 20;
        const y = (clientY - top - height / 2) / 20;

        imageRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };

    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    if (!isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!isMobile) {
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div>
      <div
        className="my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center"
        id="home"
      >
        <div className="flex-col my-auto mx-auto">
          <p className="md:text-6xl sm:text-5xl text-xl font-bold text-[#E6EBF5]">
            Hey! I'm Eleazar, a
          </p>
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-semibold md:py-5">
            <TypeAnimation
              sequence={[
                "Full-Stack Dev",
                1000,
                "Video Editor",
                1000,
                "Powerlifter",
                1000,
                "Badmintonist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="text-5xl flex justify-start gap-7 my-5 text-gray-600 ">
            <a
              className="hover:text-gray-700 transition-colors duration-200"
              href="https://www.linkedin.com/in/pevidena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="hover:text-gray-700 transition-colors duration-200"
              href="https://github.com/P541M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative inline-flex group my-3">
            <div
              className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                from-[#86A6E7] via-[#113A8D] to-[#145EF3] rounded-xl blur-lg group-hover:opacity-100
                group-hover:-inset-1 group-hover:duration-200"
            ></div>
            <div>
              <a
                href={resume}
                title="Resume"
                role="button"
                target="_blank"
                rel="noopener noreferrer" // Security measure
                className="w-[125px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
                    font-semibold text-[#E6EBF5] transition-all duration-200 bg-primary-color font-pj rounded-xl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="my-auto">
          <img
            ref={imageRef}
            className="w-[300px] sm:w-[500px] mx-auto h-auto drop-shadow-lg transition-transform duration-300 ease-out"
            src={profilepic}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
