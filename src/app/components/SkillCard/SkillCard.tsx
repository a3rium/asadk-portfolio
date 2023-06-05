import { Skill } from "@/app/types/Skill";
import React, { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SkillProps {
  skillProps: Skill;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const SkillCard: FC<SkillProps> = ({ className, skillProps }) => {
  const classes = twMerge(
    `basis-[90%] sm:basis-[45%] lg:basis-[30%] border border-primary`,
    className
  );
  return (
    <>
      <div className={classes}>
        <div className="p-2">
          <h2 className="font-semibold">{skillProps.title}</h2>
        </div>
        <div className="flex gap-2 border-t border-primary flex-wrap p-2 text-primary">
          {skillProps.technologies.map((item) => {
            return <span key={item}>{item}</span>;
          })}
        </div>
      </div>
    </>
  );
};

export default SkillCard;
