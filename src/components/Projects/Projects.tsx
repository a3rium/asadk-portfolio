import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Link from "next/link";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

const Projects = () => {
  return (
    <>
      <ContentContainer>
        <SectionHeading title="projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="text-white float-right my-1">
          <Link href="/Projects">
            <span>View all --&gt;</span>
          </Link>
        </div>
      </ContentContainer>
    </>
  );
};

export default Projects;
