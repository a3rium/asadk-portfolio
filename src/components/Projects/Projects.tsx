import React from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ProjectGrid from "../ProjectGrid/ProjectGrid";

const Projects = () => {
	return (
		<>
			<ContentContainer>
				<SectionHeading title="projects" />
				<ProjectGrid
					projects={projects}
					type="showcase"
					className="sm:grid-cols-2 lg:grid-cols-3"
				/>
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
