"use client";
import React, { useEffect, useState, useRef } from "react";

const titles = [
  "web designer",
  "avid sailor",
  "road tripper",
  "problem solver",
  "video gamer",
  "photographer",
  "animal lover",
];

const Typewriter = () => {
  let index: number = -1;
  const [title, setTitle] = useState("");
  const picker = useRef(0);

  useEffect(() => {
    picker.current = window.setInterval(
      (function changeTitle() {
        index = (index + 1) % titles.length;
        setTitle(titles[index]);
        return changeTitle;
      })(),
      6000
    );
    return () => clearInterval(picker.current);
  }, []);
  return (
    <>
      <div className="text-secondary">
        <span
          key={title}
          className="text-secondary block w-[191px] md:w-[239px] overflow-clip whitespace-nowrap animate-type border-r-2"
        >
          {title}
        </span>
      </div>
    </>
  );
};

export default Typewriter;
