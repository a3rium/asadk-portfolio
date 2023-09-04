import React from "react";
import { showcase } from "@/app/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="px-10 max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="mx-8">
          <div className="flex justify-between items-center gap-5">
            <div className="text-white w-2/3 font-medium text-4xl flex items-center gap-2">
              <div className="">
                <span className="text-secondary">#</span>projects
              </div>
              <div className="line flex-grow h-px bg-secondary"></div>
            </div>
            <div className="text-white font-medium">
              <Link href="/Projects">
                <span>View all --&gt;</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
            {showcase.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  className=""
                  projectProps={project}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
