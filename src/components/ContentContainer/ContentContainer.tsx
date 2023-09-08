import { FC } from "react";

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer: FC<ContentContainerProps> = ({
  children,
}: ContentContainerProps) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto mt-20 py-10">{children}</div>;
    </>
  );
};

export default ContentContainer;
