import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import PageHeading from "@/components/PageHeading/PageHeading";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";

const Projects = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <PageHeading title="projects" />

        <SectionHeading title="completed-projects" />
        <ProjectGrid
          projects={projects}
          type="showcase"
          type2="complete"
          className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />

        <SectionHeading title="play-pen" />
        <ProjectGrid
          projects={projects}
          type="incomplete"
          className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />
      </ContentContainer>
      <Footer />
    </>
  );
};

export default Projects;
