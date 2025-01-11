"use client";
import React from "react";
import Component from "./component";
import Code from "./code";

type Props = {
  Usage: React.ElementType;
  Code: string;
};

const Hero = (props: Props) => {
  const [first, setstate] = React.useState<boolean>(true);

  return (
    <div className="min-h-[250px] w-full">
      <button
        onClick={() => setstate(!first)}
        className="flex justify-end text-white  bg-slate-500 px-4 py-2 w-fit h-fit rounded-full hover:bg-slate-600"
      >
        Toggle
      </button>
      <div className="bg-gray-400 h-[1px] my-5 "></div>
      {first && <Component Usage={props.Usage} />}
      {!first && <Code code={props.Code} />}
    </div>
  );
};

export default Hero;
