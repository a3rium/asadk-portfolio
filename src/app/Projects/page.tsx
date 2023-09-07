import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <>
      <Header />
      {/* <div className="px-16 max-w-screen-xl mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        TODO: Hero section with carousel of projects
        HERO - Project Carousel
      </div> */}

      <div className="max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="md:px-14 mx-8 flex flex-col">
          <div className="text-white font-medium text-3xl md:text-4xl">
            <span className="text-secondary">/</span>projects
          </div>

          <div className="text-white font-medium text-2xl md:text-3xl mt-10">
            <span className="text-secondary">#</span>completed-projects
          </div>
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
          <div className="text-white font-medium text-2xl md:text-3xl mt-10">
            <span className="text-secondary">#</span>play-pen
          </div>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
