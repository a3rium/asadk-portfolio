import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import SkillCard from "@/components/SkillCard/SkillCard";
import { hobbies, skills } from "@/data/about";
import HobbyCard from "@/components/HobbyCard/HobbyCard";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import PageHeading from "@/components/PageHeading/PageHeading";

const About = () => {
	return (
		<>
			<Header />
			<ContentContainer>
				<PageHeading title="about" />
				<div className="flex-wrap flex items-center justify-between">
					<div className="md:w-5/12 w-full">
						<p className="text-primary text-base md:text-lg">
							Hello, I’m Asad!
							<br />
							<br />
							I’m a computer science graduate from Dalhousie University,
							Halifax. I enjoy solving problems and love to help people find
							innovative solutions using technology.
							<br />
							<br />I have experience working with Angular, .NET, Python and
							Java. I am currently working as a Software Developer at Swan
							Solutions & Services (P) Ltd.
						</p>
					</div>
					<div className="mx-auto">
						{/* TODO: Add photo */}
						<Image
							className="mx-auto py-4"
							src="https://via.placeholder.com/300x150"
							height={300}
							width={300}
							alt="Photo of me"
						/>
					</div>
				</div>

				<div className="mx-auto mt-20">
					<SectionHeading title="skills" />
					<div className="text-white">
						<div className="mx-auto flex justify-between flex-wrap gap-4">
							{skills.map((skill) => {
								return <SkillCard key={skill.id} skillProps={skill} />;
							})}
						</div>
					</div>
				</div>
				<SectionHeading title="hobbies" />
				<div className="text-white">
					<div className="mx-auto flex justify-around flex-wrap gap-4">
						{hobbies.map((hobby) => {
							return (
								<HobbyCard
									className="basis-[45%] sm:basis-[30%] lg:basis-[21%]"
									key={hobby.id}
									hobbyProps={hobby}
								/>
							);
						})}
					</div>
				</div>
			</ContentContainer>

			<Footer />
		</>
	);
};

export default About;
