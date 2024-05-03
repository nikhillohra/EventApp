import React from "react";
import FetchData from "./FetchData";

const Recommend = () => {
  return (
    <>
      <div className="relative p-0.5 inter1 w-full md:p-4 justify-center items-center overflow-x-hidden ">
        <div>
          <img
            src="src/assets/icons/Banner.svg"
            alt=""
            className="object-cover h-[38rem] md:w-full "
          />
        </div>
        <div className="text-center text-2xl md:text-3xl lg:text-5xl xl:text-5xl text-white font-[500] absolute top-[12%] md:top-[10rem] left-[50%] transform -translate-x-1/2 whitespace-nowrap">
          Discover Exciting Events Happening
        </div>
        <div className="text-center text-2xl md:text-3xl lg:text-5xl xl:text-5xl text-white font-[500] absolute top-[21%] md:top-[14rem] left-[50%] transform -translate-x-1/2 whitespace-nowrap">
          Near You - Stay Tuned for Updates!
        </div>
        <div className="text-[14px] md:text-base lg:text-xl  xl:text-2xl text-[#bbb2b2] font-[500] absolute top-[45%] md:top-[24rem] left-[50%] transform -translate-x-1/2 whitespace-normal md:whitespace-normal text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          totam architecto quas temporibus dolorum,
        </div>

        {/* slider */}
        <div className="absolute top-[55%] md:top-[65%] items-center justify-center w-full mx-auto ">
          <FetchData />
        </div>
      </div>
    </>
  );
};

export default Recommend;
