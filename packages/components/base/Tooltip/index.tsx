import React from "react";
import { Tooltip } from "./src";

type Props = {};

const Tooltip_Usage = (props: Props) => {
  const Trigger = (): React.ReactNode => {
    return (
      <div className="flex text-center px-3 py-2 bg-blue-900/50 rounded-[5px]">
        This is Trigger
      </div>
    );
  };

  return (
    <div className="w-1/2 h-[200px] bg-white/10 flex justify-evenly items-center rounded-[10px] ">
      <Tooltip tooltip_text="This is Tooltip">
        <div className="flex text-center px-3 py-2 bg-blue-900/50 rounded-[5px]">
          This is Trigger
        </div>
      </Tooltip>
      <Tooltip tooltip_text="This is Tooltip">
        <div className="flex text-center px-3 py-2 bg-blue-900 rounded-[5px]">
          This is Trigger
        </div>
      </Tooltip>
      <Tooltip tooltip_text="This is Tooltip">
        <div className="flex text-center px-3 py-2 bg-red-900 rounded-[5px]">
          This is Trigger
        </div>
      </Tooltip>
    </div>
  );
};

export default Tooltip_Usage;
