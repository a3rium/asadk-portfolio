"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/app/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Header = () => {
  const { toast } = useToast();

  function copyToClipboard(someText: string) {
    navigator.clipboard.writeText(someText);
  }

  return (
    <>
      <div>
        <div className="fixed top-0 left-0 right-0 bg-tertiary z-10">
          <div className="fixed top-0 left-4 hidden md:flex md:flex-col md:gap-1 md:items-center">
            <div className="h-[150px] w-[2px] rounded-b-full bg-primary"> </div>
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
                    className="flex gap-1 flex-item"
                  >
                    <Image
                      src="/icons/Discord.png"
                      alt="Discord"
                      width={28}
                      height={28}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Copy Discord Username</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={"https://github.com/a3rium/"}
                    className="flex gap-1 flex-item"
                  >
                    <Image
                      src="/icons/Github.png"
                      alt="Github"
                      width={28}
                      height={28}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Github Profile Link</p>
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
                    className="flex gap-1 flex-item"
                  >
                    <Image
                      src="/icons/Email.png"
                      alt="Email"
                      width={28}
                      height={28}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Copy Email Address</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="px-5 max-w-screen-2xl pl-10 mx-auto flex items-center justify-between pt-3 my-1">
            <div className="left flex items-center font-bold text-white text-3xl">
              <span className="text-secondary font-medium px-1">[</span>Asad
              <span className="text-secondary font-medium px-1">]</span>K
              <span className="hidden md:block">othawala</span>
              <span className="text-secondary font-bold">.</span>
            </div>
            <div className="right flex items-center">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
