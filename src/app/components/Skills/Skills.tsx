import { skills } from "@/app/data/about";
import React, { FC } from "react";
import SkillCard from "../SkillCard/SkillCard";
import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div className="px-10 max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="mx-8">
          <div className="mb-10">
            <div className=" text-white w-2/3 font-medium text-2xl md:text-3xl flex items-center gap-2">
              <div className="">
                <span className="text-secondary">#</span>skills
              </div>
              <div className="line flex-grow h-px bg-secondary"></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-center">
            <div className="mx-auto">
              <Image
                className="max-w-[80%] mx-auto"
                src="/motifs/tree-circuits.png"
                height={450}
                width={450}
                alt=""
              />
            </div>
            <div className="mx-auto flex justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4">
              {skills.map((skill) => {
                return <SkillCard key={skill.id} skillProps={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
