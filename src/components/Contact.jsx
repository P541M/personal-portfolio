import React from "react";

const Contact = () => {
  return (
    <div
      className="flex justify-center my-5 h-full sm:h-[70vh] items-center"
      id="contact"
    >
      <style>
        {`
          input::placeholder, textarea::placeholder {
            color: #6B7280; /* Tailwind CSS gray-500 color */
            opacity: 1;
          }
        `}
      </style>

      <div className="max-w-[1200px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="p-6 mr-2 bg-[#0B0C0E]/40 rounded-xl flex flex-col justify-around shadow-lg">
            <h1 className="text-4xl sm:text-5xl text-[#E6EBF5]">
              Contact <span>Me</span>
            </h1>
            <p className="text-normal text-lg text-gray-500 mt-2">
              Let's connect on LinkedIn <br /> or send me an Email!
            </p>

            <div className="flex items-center mt-2 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                className="w-8 h-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  stroke-width="1.5"
                  d="M2.94 4.87L10 8.4l7.06-3.53A2 2 0 0 0 15.5 3H4.5a2 2 0 0 0-1.56.87zM18 7.1l-7.5 3.75a1 1 0 0 1-.9 0L2 7.1V15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.1z"
                ></path>
              </svg>

              <div className="ml-4 text-md tracking-wide w-40">Eleazar</div>
            </div>
          </div>

          <form
            action="https://getform.io/f/rbeqzqgb"
            method="post"
            className="p-6 flex flex-col justify-center max-w-[700px]"
          >
            <div className="flex flex-col shadow-lg">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className=" w-100 mt-2 p-3 rounded-xl bg-[#0B0C0E]/40 text-[#E6EBF5]"
              />
            </div>

            <div className="flex flex-col mt-2 shadow-lg">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className=" w-100 mt-2 p-3 rounded-xl bg-[#0B0C0E]/40 text-[#E6EBF5]"
              />
            </div>

            <div className="flex flex-col mt-2 shadow-lg">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className=" w-100 mt-2 p-3 rounded-xl bg-[#0B0C0E]/40 text-[#E6EBF5]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary-color text-[#E6EBF5] py-3 px-6 rounded-xl mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
