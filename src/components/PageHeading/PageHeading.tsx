import { FC } from "react";

type PageHeadingProps = {
  title: string;
};

const PageHeading: FC<PageHeadingProps> = ({ title }: PageHeadingProps) => {
  return (
    <div className="text-white font-medium text-3xl md:text-4xl">
      <span className="text-secondary">/</span>
      {title}
    </div>
  );
};

export default PageHeading;
