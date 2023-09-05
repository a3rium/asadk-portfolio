"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "../ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

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
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        toast({
                          description: "Username copied!",
                        });
                        copyToClipboard("a3rium");
                      }}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={"/icons/Discord.png"}
                        alt="Discord"
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy Discord Username</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => {
                        toast({
                          description: "Email address copied!",
                        });
                        copyToClipboard("asadkothawala97@gmail.com");
                      }}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={"/icons/Email.png"}
                        alt="Email"
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy Email Address</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://github.com/a3rium/" target="_blank">
                      <Image
                        width={32}
                        height={32}
                        src={"/icons/Github.png"}
                        alt="Github"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github Profile Link</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={"https://www.linkedin.com/in/asadkoths/"}
                      target="_blank"
                      className="flex gap-1 flex-item"
                    >
                      <Image
                        src="/icons/Linkedin.png"
                        alt="LinkedIn"
                        width={28}
                        height={28}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn Profile Link</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="text-right text-primary pb-4 mt-8">
          Made by Asad Kothawala.
        </div>
      </div>
    </>
  );
};

export default Footer;
