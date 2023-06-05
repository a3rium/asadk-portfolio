import React from "react";

const About = () => {
  return (
    <>
      <div className="relative w-screen">
        <div className="px-5 max-w-screen-2xl mx-auto mt-20 py-10">
          <div className="flex-wrap flex items-center justify-between">
            <div className="md:w-5/12 w-full mx-8">
              <div className="mb-12">
                <div className="text-white font-medium text-4xl flex items-center gap-2">
                  <div className="">
                    <span className="text-secondary">#</span>about-me
                  </div>
                  <div className="line flex-grow h-px bg-secondary"></div>
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
              <div className="mt-7">
                <a
                  href="#"
                  className="duration-150 hover:bg-secondary/30 border border-secondary px-4 py-2 text-white"
                >
                  <button>Read more -{">"}</button>
                </a>
              </div>
            </div>
            <div className="mx-auto">
              {/* TODO: Add photo */}
              <img
                className="mx-auto py-4"
                src="https://via.placeholder.com/300x150"
                alt="Photo of me"
              />
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-[10%] hidden md:block -z-20">
          <img src="/motifs/circuit-3.png" className="max-h-24"></img>
        </div>
      </div>
    </>
  );
};

export default About;
