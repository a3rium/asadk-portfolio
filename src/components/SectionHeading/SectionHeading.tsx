import { FC } from "react";

type SectionHeadingProps = {
  title: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
}: SectionHeadingProps) => {
  return (
    <div className="text-white w-2/3 font-medium text-2xl md:text-3xl flex items-center gap-2 mb-12">
      <div className="">
        <span className="text-secondary">#</span>
        {title}
      </div>
      <div className="line flex-grow h-px bg-secondary"></div>
    </div>
  );
};

export default SectionHeading;
