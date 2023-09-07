"use client";
import React from "react";
import ContactPanel from "../ContactPanel/ContactPanel";

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-secondary mt-20 mb-8"></div>
      <div className="px-5 max-w-screen-2xl mx-auto">
        <div className="flex justify-between gap-y-10 flex-wrap">
          <div className="mx-auto md:mx-0">
            <div className="flex items-center gap-8 mb-3">
              <div className="flex gap-2 items-center text-xl md:text-2xl text-white font-bold">
                <span>Asad</span>
              </div>
              <span className="text-primary text-sm md:text-base">
                +1 902 401 3213
              </span>
            </div>
            <div className="text-white text-sm md:text-base">
              <p>Software developer and web-designer based in Canada.</p>
            </div>
          </div>
          <ContactPanel />
        </div>
        <div className="text-right text-primary text-xs md:text-sm pb-4 mt-8">
          Made by Asad Koths.
        </div>
      </div>
    </>
  );
};

export default Footer;
