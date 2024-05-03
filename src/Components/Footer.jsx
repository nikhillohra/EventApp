import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black h-[10rem] p-5">
        <div className="text-[#CF2D2D] font-semibold text-2xl ml-4 mt-4 ">
          BookUsNow
        </div>
        <div className="flex ml-4 items-center ">
        <TiLocation color="#66635c"
                className="w-5 h-5 mr-1 mt-1 mb-1.5"
              />
          <p className=" text-[#9a9c9e] font-[400]  whitespace-nowrap">
            Mumbai, India
          </p>
        </div>

        <div className="flex ml-4 items-center">
          <AiOutlineMail color="gray" size={18} />
          <p className=" text-[#9a9c9e] font-[400] ml-1 whitespace-nowrap">
            nikhillohra99@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
