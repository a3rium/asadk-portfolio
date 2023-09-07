import { Hobby } from "@/lib/types/Hobby";
import React, { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HobbyProps {
  hobbyProps: Hobby;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const HobbyCard: FC<HobbyProps> = ({ className, hobbyProps }) => {
  const classes = twMerge(
    `basis-[45%] sm:basis-[30%] lg:basis-[21%] border border-primary`,
    className
  );
  return (
    <>
      <div className={classes}>
        <div className="flex gap-2 border-t border-primary flex-wrap p-2 text-primary text-base md:text-lg">
          {hobbyProps.title}
        </div>
      </div>
    </>
  );
};

export default HobbyCard;
