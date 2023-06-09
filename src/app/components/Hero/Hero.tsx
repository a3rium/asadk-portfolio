import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-screen relative">
        <div className="absolute right-0 top-[20%] hidden md:block -z-10">
          <Image
            src="/motifs/circuit-1.png"
            alt="circuit motif"
            width={100}
            height={100}
          />
        </div>
        <div className="px-16 max-w-screen-xl mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
          <div className="w-10/12 sm:w-8/12 mx-auto">
            <h1 className="font-semibold text-4xl text-white mb-3">
              Asad is a{" "}
              <span className="text-secondary">software developer</span> and{" "}
              <span className="text-secondary">web designer</span>
            </h1>
            <p className="text-primary my-6">
              He builds impactful solutions where technologies meet creativity.
            </p>
            <button className="text-white font-medium py-2 px-4 border duration-200 border-secondary hover:bg-secondary/30">
              Hire me!
            </button>
          </div>
          {/* TODO: Add image of me */}
          <div className="mx-auto py-2">
            <div className="">
              <Image
                src={"https://via.placeholder.com/300x150"}
                width={300}
                height={150}
                alt="Headshot of Asad"
              />
            </div>
            <div className="border flex items-center gap-2 border-primary p-2 text-primary">
              <div className="w-4 h-4 bg-secondary"></div>
              <div className="">
                Currently working on{" "}
                <span className="text-white">Portfolio</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-[10%] hidden md:block -z-10">
          <Image
            src="/motifs/circuit-2.png"
            width={100}
            height={150}
            alt="circuit motif"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
