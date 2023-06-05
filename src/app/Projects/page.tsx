import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { completed } from "@/app/data/projects";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="px-5 max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="flex">
          <div className="text-white font-medium text-3xl flex gap-2">
            <div className="ml-8">
              <span className="text-secondary">/</span>projects
              <br />
              <br />
              <span className="text-secondary">#</span>completed-projects
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap content-start ml-8 my-8">
          {completed.map((project) => {
            return <ProjectCard className="" projectProps={project} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
