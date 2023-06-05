import { Project } from "@/app/types/Project";
import React, { FC, HTMLAttributes } from "react";

interface ProjectProps {
  projectProps: Project;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const ProjectCard: FC<ProjectProps> = ({ className, projectProps }) => {
  return (
    <>
      <div
        className={`border sm:basis-[90%] md:basis-[48%] lg:basis-[30%] border-primary mx-2 my-2
          ${className}`}
      >
        <div className="">
          <img className="w-full" src={projectProps.img_path} alt="" />
        </div>
        <div className="flex gap-2 flex-wrap p-2 border-y border-primary">
          {projectProps.languages.map((e) => {
            return <span className=" text-primary">{e}</span>;
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
