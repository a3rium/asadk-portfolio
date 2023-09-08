import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import SectionHeading from "../SectionHeading/SectionHeading";

const About = () => {
  return (
    <>
      <div className="relative w-full">
        <ContentContainer>
          <div className="flex-wrap flex items-center justify-between">
            <div className="md:w-5/12 w-full">
              <SectionHeading title="about-me" />
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
              <div className="mt-7">
                <Link
                  href={"/About"}
                  className="duration-150 hover:bg-secondary/30 border border-secondary px-4 py-2 text-white text-base md:text-lg"
                >
                  <button>Read more -{">"}</button>
                </Link>
              </div>
            </div>
            <div className="mx-auto pt-4">
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
        </ContentContainer>

        <div className="absolute right-0 bottom-[10%] hidden md:block -z-20">
          <Image
            src="/motifs/circuit-3.png"
            alt="circuit motif"
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
};

export default About;
