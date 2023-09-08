"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { pages } from "@/data/navigation";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav>
        <ul
          className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${
            !toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`
          } bg-tertiary md:static`}
        >
          {pages.map((page) => (
            <li
              key={page.id}
              className="text-primary active:text-white text-4xl md:text-lg my-4 list-none mx-2 lg:mx-4 md:my-auto "
            >
              <Link href={page.path}>
                <span className="text-secondary font-medium">#</span>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <label
          onClick={() => {
            setToggle(false);
          }}
          className="absolute block md:hidden right-3 top-3 text-3xl text-white"
        >
          ✕
        </label>
      </nav>

      <div
        onClick={() => setToggle(true)}
        className={`${toggle ? `hidden` : `block`}`}
      >
        <div className="block absolute top-6 right-2 md:hidden w-8">
          <div className="w-full h-[1px] mb-2 rounded-r-3xl bg-white"></div>
          <div className="w-full h-[1px] my-2 rounded-r-3xl bg-white"></div>
          <div className="w-full h-[1px] mt-2 rounded-r-3xl bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
