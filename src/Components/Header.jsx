import React from "react";
import searchIcon from "../assets/icons/search.png";
import heartIcon from "../assets/icons/heart.png";
import personIcon from "../assets/icons/person.png";

const Header = () => {
  return (
    <header className="bg-white w-full shadow-md py-4  md:px-6  flex justify-between items-center inter1 mr-0">
      <div className="flex items-center space-x-4 mr-10 ">
        <div className="text-[#CF2D2D] font-semibold text-xl mr-2 ">
          BookUsNow
        </div>
      </div>

      <div className=" flex gap-2 items-center justify-center space-x-4 ">
        <div className=" md:flex hidden flex-none ">
          <button className="flex items-center justify-center bg-black text-white p-1.5 px-2 rounded text-[15px]">
            <img
              src="src/assets/icons/ham.png"
              alt="icon"
              className="mr-2 w-5 h-5 flex"
            />
            Categories
          </button>
        </div>

        <div className="relative grow  md:flex hidden ml-20 ">
          <input
            type="text"
            placeholder="Search"
            className="border border-[#B0BABF] rounded py-2 px-4 w-full md:w-auto lg:w-[400px] text-[#1E2022]  focus:outline-none
             text-base leading-normal  pl-5 "
          />
          <img
            src={searchIcon}
            alt="Search"
            className="right-4 top-2 w-6 h-6 cursor-pointer absolute"
          />
        </div>
      </div>

      <div className=" flex  gap-1 items-center md:justify-center space-x-4 ">
        <div className="flex items-center space-x-2 ml-6 ">
          <img
            src={heartIcon}
            alt="Favorites"
            className="w-6 h-6 md:flex hidden "
          />
          <p className="text-[#1E2022] md:flex hidden pr-1 ">Favorites</p>
        </div>
        <br />

        <button className="flex-none md:flex hidden text-[#1E2022] border border-[#B0BABF] rounded py-1.5 px-3 w-30 whitespace-nowrap ">
          Sign In
        </button>

        <div className="md:hidden flex-grow flex justify-end ">
          <div className="flex gap-1.5 items-center cursor-pointer">
            <img src={searchIcon} alt="search" className="w-6" />
            <img src={heartIcon} alt="like" className="w-6 h-6" />
            <img src={personIcon} alt="profile" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
