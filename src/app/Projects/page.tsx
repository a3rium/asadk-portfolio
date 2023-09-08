import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import PageHeading from "@/components/PageHeading/PageHeading";

const Projects = () => {
  return (
    <>
      <Header />
      {/* <div className="px-16 max-w-screen-xl mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        TODO: Hero section with carousel of projects
        HERO - Project Carousel
      </div> */}
      <ContentContainer>
        <PageHeading title="projects" />

        <SectionHeading title="completed-projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => {
            if (project.type === "showcase" || project.type === "complete")
              return (
                <ProjectCard
                  key={project.id}
                  className=""
                  projectProps={project}
                />
              );
          })}
        </div>
        <SectionHeading title="play-pen" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => {
            if (project.type === "incomplete")
              return (
                <ProjectCard
                  key={project.id}
                  className=""
                  projectProps={project}
                />
              );
          })}
        </div>
      </ContentContainer>
      <Footer />
    </>
  );
};

export default Projects;
