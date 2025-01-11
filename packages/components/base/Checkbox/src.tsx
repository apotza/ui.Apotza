import React from "react";
import * as Radix from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

type CheckboxProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "default" | "lg";
};

const sizes = {
  sm: "w-6 h-6 scale-75",
  default: "w-10 h-10",
  lg: "w-12 h-12 scale-110",
};

const CheckBox = ({ checked, onChange }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(checked || false);

  return (
    <div className="flex items-center">
      <Radix.Root
        checked={checked}
        className={cn(
          "p-2 w-10 h-10 rounded-[10px]  bg-blue-600/70 border-[3px] outline-none border-green-700 data-[state=checked]:bg-lime-500 transition-all duration-500 "
        )}
        onClick={() => {
          setIsChecked(!isChecked);
          onChange && onChange(!isChecked);
        }}
      >
        <Radix.Indicator className="text-white flex items-center justify-center scale-[1.8] overflow-visible">
          {(isChecked || checked) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={24}
                strokeDashoffset={24}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3.9}
                d="M5 11L11 17L21 7"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.5s"
                  values="24;0"
                ></animate>
              </path>
            </svg>
          )}
        </Radix.Indicator>
      </Radix.Root>
    </div>
  );
};

export { CheckBox };
