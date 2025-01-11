import React from "react";
import { Index } from "./src";

type Props = {};

const Dialog_Usage = (props: Props) => {
  const Trigger = (): React.ReactNode => {
    return (
      <div className="flex text-center px-3 py-2 bg-red-300 rounded-[5px]">
        This is Trigger
      </div>
    );
  };
  return (
    <div className="">
      <Index trigger={<Trigger />} title="This is Title">
        <div>Sahil is Great</div>
      </Index>
    </div>
  );
};

export default Dialog_Usage;
