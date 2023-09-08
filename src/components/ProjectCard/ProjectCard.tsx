import { Project } from "@/lib/types/Project";
import Image from "next/image";
import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ProjectProps = {
  projectProps: Project;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

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
          <h2 className="text-white text-xl md:text-2xl font-medium">
            {projectProps.title}
          </h2>
          <p className="py-4 text-primary text-base md:text-lg">
            {projectProps.description}
          </p>
        </div>
        <div className="grow"></div>
        <div className="flex flex-row justify-end gap-2 m-2">
          <div className="">
            {projectProps.link.length > 0 && (
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="py-2 px-4 text-white border border-secondary hover:bg-secondary/30 duration-150">
                      <Link
                        href={projectProps.link}
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Link</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <div className="">
            {projectProps.repo.length > 0 && (
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="py-2 px-4 text-white border border-secondary hover:bg-secondary/30 duration-150">
                      <Link
                        href={projectProps.repo}
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
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Repo Link</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
