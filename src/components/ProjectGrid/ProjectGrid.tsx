import { Project } from "@/lib/types/Project";
import { FC, HTMLAttributes } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { twMerge } from "tailwind-merge";
interface ProjectGridProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  projects: Project[];
  type: string;
  type2?: string;
}

const ProjectGrid: FC<ProjectGridProps> = ({
  className,
  projects,
  type,
  type2,
}: ProjectGridProps) => {
  const classes = twMerge(`grid grid-cols-1 `, className);
  return (
    <div className={classes}>
      {projects.map((project) => {
        if (project.type === type || project.type == type2)
          return <ProjectCard key={project.id} projectProps={project} />;
      })}
    </div>
  );
};

export default ProjectGrid;
