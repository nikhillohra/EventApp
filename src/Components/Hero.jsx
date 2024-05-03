import React from "react";

const Hero = () => {
  return (
    <>
      <div className="inter1 bg-white shadow-md pb-2 px-1 sm:px-4 overflow-x-hidden">
        <div className="flex flex-wrap items-center ">
          <div className="flex items-center space-x-2 w-full lg:w-auto mt-[-10px] mb-4 md:mt-0 md:mb-0">
            <div className="flex">
              <img
                src="src/assets/icons/location.png"
                alt="location"
                className="w-4 h-4 mr-1 mt-1"
              />
              <p className=" text-[#1E2022] font-[400]  whitespace-nowrap">
                Mumbai, India
              </p>
              <img
                src="src/assets/icons/right.png"
                alt=""
                className="w-3 h-3 mt-1.5 ml-1"
              />
            </div>
          </div>

          <div className="flex-grow  overflow-x-auto items-center w-full lg:w-auto justify-center ">
            <div className="flex   w-full space-x-4 lg:w-auto justify-center mr-0 md:mr-12">
              <button className="text-[#1E2022] hover:text-[#989090] whitespace-nowrap">
                Live shows
              </button>
              <button className="text-[#1E2022] hover:text-[#989090]">
                Streams
              </button>
              <button className="text-[#1E2022] hover:text-[#989090]">
                Movies
              </button>
              <button className="text-[#1E2022] hover:text-[#989090]">
                Plays
              </button>
              <button className="text-[#1E2022] hover:text-[#989090]">
                Events
              </button>
              <button className="text-[#1E2022] hover:text-[#989090]">
                Sports
              </button>
              <button className="text-[#1E2022] hover:text-[#989090]">
                Activities
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
