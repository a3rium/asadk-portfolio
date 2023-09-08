import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import Link from "next/link";
import ContentContainer from "../ContentContainer/ContentContainer";

const Projects = () => {
  return (
    <>
      <ContentContainer>
        <div className="md:px-14 mx-8">
          <div className="flex justify-between items-center gap-5">
            <div className="text-white w-2/3 font-medium text-2xl md:text-3xl flex items-center gap-2">
              <div className="">
                <span className="text-secondary">#</span>projects
              </div>
              <div className="line flex-grow h-px bg-secondary"></div>
            </div>
            <div className="text-white">
              <Link href="/Projects">
                <span>View all --&gt;</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8">
            {projects.map((project) => {
              if (project.type === "showcase")
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
      </ContentContainer>
    </>
  );
};

export default Projects;
