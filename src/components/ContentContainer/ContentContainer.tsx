import { FC } from "react";

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer: FC<ContentContainerProps> = ({
  children,
}: ContentContainerProps) => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto mt-20 py-10">
        <div className="md:px-14 mx-8">{children}</div>
      </div>
      ;
    </>
  );
};

export default ContentContainer;
