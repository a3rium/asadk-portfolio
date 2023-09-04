import { Project } from "@/app/types/Project";
import Image from "next/image";
import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectProps {
  projectProps: Project;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const ProjectCard: FC<ProjectProps> = ({ className, projectProps }) => {
  const classes = twMerge(
    `border border-primary mx-2 my-2 flex flex-col`,
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
          <p className="py-4 text-primary">{projectProps.description}</p>
        </div>
        <div className="grow"></div>
        <div className="flex flex-row justify-end gap-2 m-2">
          <div className="">
            {projectProps.link.length > 0 && (
              <div className="py-2 px-4 text-white border border-secondary hover:bg-secondary/30 duration-150">
                <Link
                  href={projectProps.link}
                  title="Live Link"
                  target="_blank"
                  className=""
                >
                  <Image
                    className=""
                    width={32}
                    height={32}
                    src={"/icons/Live.png"}
                    alt="Live Link"
                  />
                </Link>
              </div>
            )}
          </div>
          <div className="">
            {projectProps.repo.length > 0 && (
              <div className="py-2 px-4 text-white border border-secondary hover:bg-secondary/30 duration-150">
                <Link
                  href={projectProps.repo}
                  title="Repo Link"
                  target="_blank"
                  className=""
                >
                  <Image
                    width={32}
                    height={32}
                    src={"/icons/Github.png"}
                    alt="Repo Link"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
