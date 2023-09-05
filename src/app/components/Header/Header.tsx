import React from "react";
import Navbar from "../Navbar/Navbar";
import FloatingContactActions from "../FloatingContactActions/FloatingContactActions";

const Header = () => {
  return (
    <>
      <div>
        <div className="fixed top-0 left-0 right-0 bg-tertiary z-10">
          <FloatingContactActions />
          <div className="px-7 max-w-screen-2xl mx-auto flex items-center justify-between pt-3 my-1">
            <div className="left flex items-center font-bold text-white text-3xl md:text-4xl lg:text-5xl">
              <span className="text-secondary font-medium px-1">[</span>Asad
              <span className="text-secondary font-medium px-1">]</span>K
              <span className="hidden md:block">othawala</span>
              <span className="text-secondary font-bold">.</span>
            </div>
            <div className="right flex items-center">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
