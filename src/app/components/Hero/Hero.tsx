import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute right-0 top-[20%] hidden md:block -z-10">
          <Image
            src="/motifs/circuit-1.png"
            alt="circuit motif"
            width={100}
            height={100}
          />
        </div>
        <div className="sm:px-16 max-w-screen-xl mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
          <div className="w-10/12 sm:w-8/12 mx-auto">
            <h1 className="font-semibold text-2xl md:text-3xl text-white mb-3">
              Asad is a{" "}
              <span className="text-secondary">software developer</span> and{" "}
              <span className="text-secondary">web designer</span>
            </h1>
            <p className="text-primary my-6 text-base md:text-lg">
              He builds impactful solutions where technologies meet creativity.
            </p>
            <Link
              href="/Contact"
              className="text-white font-medium text-base md:text-lg py-2 px-4 border duration-200 border-secondary hover:bg-secondary/30"
            >
              Hire me!
            </Link>
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
              <div className="text-base md:text-lg">
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
