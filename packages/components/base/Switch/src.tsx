import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  width?: number;
  height?: number;
};

export const Switch = ({ onChange, checked = false, width, height }: Props) => {
  const [isChecked, setIsChecked] = React.useState(checked || false);

  React.useEffect(() => {
    onChange && onChange(isChecked);
  }, [isChecked]);

  return (
    <div className="relative size-full flex bg-blue-950 rounded-full ">
      <div
        className={cn(
          "absolute inset-2  rounded-full cursor-pointer",
          checked || isChecked ? "bg-blue-600" : "bg-blue-600/40"
        )}
        onClick={() => setIsChecked(!isChecked)}
      >
        <div
          className={cn(
            "absolute transition-all ease-in-out duration-200 rounded-full h-full aspect-square",
            checked || isChecked
              ? `translate-x-14 bg-white `
              : "translate-x-0 bg-white/40"
          )}
        ></div>
      </div>
    </div>
  );
};
