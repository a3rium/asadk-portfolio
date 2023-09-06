"use client";
import React, { useState, useRef, useEffect } from "react";

const titles: string[] = [
  "web designer",
  "avid sailor",
  "road tripper",
  "problem solver",
  "video gamer",
  "photographer",
  "animal lover",
];
let titleLength: number;

const Typewriter = () => {
  const [title, setTitle] = useState<string>();
  const picker = useRef(0);
  let lastTitle: string = "";

  function changeTitle() {
    let timer: number;
    let newTitle: string;
    do {
      const index = Math.floor(Math.random() * titles.length);
      newTitle = titles[index];
    } while (newTitle === lastTitle);
    titleLength = newTitle.length;
    timer = titleLength * 400;
    setTitle(newTitle);
    lastTitle = newTitle;
    console.log(newTitle);
    picker.current = window.setTimeout(changeTitle, timer);
  }

  useEffect(() => {
    changeTitle();
    return () => {
      window.clearTimeout(picker.current);
    };
  }, []);

  return (
    <>
      <span
        key={title}
        className={`text-secondary inline-block min-[460px]:block w-0 overflow-clip font-mono whitespace-nowrap border-r-2
        ${titleLength == 5 ? "animate-type_5" : ""}
        ${titleLength == 6 ? "animate-type_6" : ""}
        ${titleLength == 7 ? "animate-type_7" : ""}
        ${titleLength == 8 ? "animate-type_8" : ""}
        ${titleLength == 9 ? "animate-type_9" : ""}
        ${titleLength == 10 ? "animate-type_10" : ""}
        ${titleLength == 11 ? "animate-type_11" : ""}
        ${titleLength == 12 ? "animate-type_12" : ""}
        ${titleLength == 13 ? "animate-type_13" : ""}
        ${titleLength == 14 ? "animate-type_14" : ""}
        ${titleLength == 15 ? "animate-type_15" : ""}
        `}
      >
        {title}
      </span>
    </>
  );
};

export default Typewriter;
