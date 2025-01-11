import React from "react";

type Props = {
  Usage: React.ElementType;
};

const Component = ({ Usage }: Props) => {
  return (
    <div className=" w-full h-full ">
      <Usage />
    </div>
  );
};

export default Component;
