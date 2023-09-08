import { skills } from "@/data/about";
import React, { FC } from "react";
import SkillCard from "@/components/SkillCard/SkillCard";
import Image from "next/image";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

const Skills = () => {
  return (
    <>
      <ContentContainer>
        <SectionHeading title="skills" />
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
      </ContentContainer>
    </>
  );
};

export default Skills;
