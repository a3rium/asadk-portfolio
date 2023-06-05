import { skills } from "@/app/data/skills";
import React, { FC } from "react";
import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  return (
    <>
      <div className="px-5 max-w-screen-2xl mx-auto mt-20 py-10">
        <div className=" mb-10">
          <div className=" text-white w-2/3 font-medium text-4xl flex items-center gap-2">
            <div className="ml-8">
              <span className="text-secondary">#</span>skills
            </div>
            <div className="line flex-grow h-px bg-secondary"></div>
          </div>
        </div>
        <div className="mx-8 flex flex-wrap gap-10 justify-between items-center text-white">
          <div className="mx-auto">
            <img
              className="max-w-[80%] mx-auto"
              src="/motifs/tree-circuits.png"
              alt=""
            />
          </div>
          <div className="mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4">
            {skills.map((skill) => {
              return <SkillCard skillProps={skill} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
