import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-secondary mt-20 mb-8"></div>
      <div className="px-5 max-w-screen-2xl mx-auto">
        <div className="flex justify-between gap-y-10 flex-wrap">
          <div className="mx-auto md:mx-0">
            <div className="flex items-center gap-8 mb-3 ">
              <div className="flex gap-2 items-center text-2xl text-white font-bold">
                <span>Asad</span>
              </div>
              <span className="text-primary">asadkothawala97@gmail.com</span>
            </div>
            <div className="text-white">
              <p>Software developer and web-designer based in Canada.</p>
            </div>
          </div>
          <div className=" mx-auto md:mx-0">
            <h2 className="text-white text-2xl font-medium mb-3">Contact</h2>
            <div className="flex items-center gap-2">
              <a href="#">
                <Image
                  width={32}
                  height={32}
                  src={"/icons/Discord.png"}
                  alt="Discord"
                />
              </a>
              <a href="#">
                <Image
                  width={32}
                  height={32}
                  src={"/icons/Email.png"}
                  alt="Email"
                />
              </a>
              <a href="#">
                <Image
                  width={32}
                  height={32}
                  src={"/icons/Github.png"}
                  alt="Github"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-right text-primary pb-4 mt-12">
          © Copyright 2022. Made by Asad Kothawala.
        </div>
      </div>
    </>
  );
};

export default Footer;
