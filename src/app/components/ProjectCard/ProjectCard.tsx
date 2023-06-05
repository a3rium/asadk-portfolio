import { Project } from "@/app/types/Project";
import Image from "next/image";
import React, { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectProps {
  projectProps: Project;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const ProjectCard: FC<ProjectProps> = ({ className, projectProps }) => {
  const classes = twMerge(
    `border sm:basis-[90%] md:basis-[48%] lg:basis-[30%] border-primary mx-2 my-2`,
    className
  );
  return (
    <>
      <div className={classes}>
        <div className="">
          <Image
            className="w-full"
            src={projectProps.img_path}
            alt=""
            width={300}
            height={150}
          />
        </div>
        <div className="flex gap-2 flex-wrap p-2 border-y border-primary">
          {projectProps.languages.map((e) => {
            return (
              <span key={e} className="text-primary">
                {e}
              </span>
            );
          })}
        </div>
        <div className="p-4">
          <h2 className="text-white text-2xl font-medium">
            {projectProps.title}
          </h2>
          <p className="py-4 text-primary">{projectProps.discription}</p>
          <div className="">
            <button className=" py-2 px-4 text-white border border-secondary hover:bg-secondary/30 duration-150">
              Live {"<"}~{">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
