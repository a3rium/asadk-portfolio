import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { completed } from "@/app/data/projects";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="px-16 max-w-screen-xl mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        {/* TODO: Hero section with carousel of projects */}
        HERO - Project Carousel
      </div>

      <div className="px-10 max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="flex flex-col mx-8">
          <div className="text-white font-medium text-4xl">
            <span className="text-secondary">/</span>projects
          </div>

          <div className="text-white font-medium text-3xl mt-10">
            <span className="text-secondary">#</span>completed-projects
          </div>
          <div className="flex flex-wrap justify-between">
            {completed.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  className="sm:basis-[45%] md:basis-[30%] lg:basis-[23%]"
                  projectProps={project}
                />
              );
            })}
          </div>
          <div className="text-white font-medium text-3xl mt-10">
            <span className="text-secondary">#</span>play-pen
          </div>
          <div className="flex flex-wrap justify-between">
            {completed.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  className="sm:basis-[45%] md:basis-[30%] lg:basis-[23%]"
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
