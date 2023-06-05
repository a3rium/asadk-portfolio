import { Skill } from "@/app/types/Skill";
import React, { FC } from "react";

interface SkillProps {
  skillProps: Skill;
}

const SkillCard: FC<SkillProps> = ({ skillProps }) => {
  return (
    <>
      <div className="w-[90%] sm:w-[45%] lg:w-[30%] border border-primary">
        <div className="p-2">
          <h2 className="font-semibold">{skillProps.title}</h2>
        </div>
        <div className="flex gap-2 border-t border-primary flex-wrap p-2 text-primary">
          {skillProps.technologies.map((item) => {
            return <span>{item}</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default SkillCard;
