import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import SkillCard from "../components/SkillCard/SkillCard";
import { hobbies, skills } from "../data/about";
import HobbyCard from "../components/HobbyCard/HobbyCard";

const About = () => {
  return (
    <>
      <Header />
      <div className="px-10 max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="flex-wrap flex items-center justify-between mx-8">
          <div className="md:w-5/12 w-full">
            <div className="mb-12">
              <div className="text-white font-medium text-4xl">
                <div className="">
                  <span className="text-secondary">/</span>about
                </div>
              </div>
            </div>
            <p className="text-primary ">
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
          <div className="mx-auto mt-20">
            <div className="mb-10">
              <div className=" text-white font-medium text-4xl">
                <div className="">
                  <span className="text-secondary">#</span>skills
                </div>
              </div>
            </div>
            <div className="text-white">
              <div className="mx-auto flex justify-between flex-wrap gap-4">
                {skills.map((skill) => {
                  return <SkillCard key={skill.id} skillProps={skill} />;
                })}
              </div>
            </div>
          </div>
          <div className="w-full mt-20">
            <div className="mb-10">
              <div className=" text-white font-medium text-4xl">
                <div className="">
                  <span className="text-secondary">#</span>hobbies
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
