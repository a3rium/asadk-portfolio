"use client";
import React, { useState, useRef, useEffect } from "react";

const titles: string[] = [
  "web designer",
  "captain of the Cs",
  "adventurer",
  "python charmer",
  "visionary",
  "problem solver",
  "code monkey",
  "game designer",
  "pun-isher of bugs",
  "snapshot artist",
  "sci-fi writer",
  "cat whisperer",
  "creative thinker",
  "trouble shooter",
  "tech enthusiast",
  "java junkie",
  "animal lover",
  "page turner",
  "rickroller",
];
let titleLength: number;

const Typewriter = () => {
  const [title, setTitle] = useState<string>();
  const picker = useRef(0);
  let lastTitle: string;

  function changeTitle() {
    let timer: number;
    let newTitle: string;
    // console.log("Last: " + lastTitle);
    do {
      if (!lastTitle) {
        const index = Math.floor(Math.random() * titles.length);
        newTitle = titles[index];
      } else {
        const index = (titles.indexOf(lastTitle) + 1) % titles.length;
        newTitle = titles[index];
      }
    } while (newTitle === lastTitle || newTitle.length > 20);
    // console.log("Title: " + newTitle + " Length: " + newTitle.length);
    titleLength = newTitle.length;
    timer = titleLength * 400;
    setTitle(newTitle);
    // console.log("New: " + newTitle);
    lastTitle = newTitle;
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
        className={`text-secondary inline-block min-[460px]:block sm:inline-block min-[850px]:block w-0 overflow-clip font-mono whitespace-nowrap border-r-2
        ${titleLength === 5 ? "animate-type_5" : ""}
        ${titleLength === 6 ? "animate-type_6" : ""}
        ${titleLength === 7 ? "animate-type_7" : ""}
        ${titleLength === 8 ? "animate-type_8" : ""}
        ${titleLength === 9 ? "animate-type_9" : ""}
        ${titleLength === 10 ? "animate-type_10" : ""}
        ${titleLength === 11 ? "animate-type_11" : ""}
        ${titleLength === 12 ? "animate-type_12" : ""}
        ${titleLength === 13 ? "animate-type_13" : ""}
        ${titleLength === 14 ? "animate-type_14" : ""}
        ${titleLength === 15 ? "animate-type_15" : ""}
        ${titleLength === 16 ? "animate-type_16" : ""}
        ${titleLength === 17 ? "animate-type_17" : ""}
        ${titleLength === 18 ? "animate-type_18" : ""}
        ${titleLength === 19 ? "animate-type_19" : ""}
        ${titleLength === 20 ? "animate-type_20" : ""}
        `}
      >
        {title}
      </span>
    </>
  );
};

export default Typewriter;
