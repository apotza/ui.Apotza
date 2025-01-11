import React from "react";

import * as Radix from "@radix-ui/react-tooltip";

type Props = {
  tooltip_text: string;
  children: React.ReactNode;
};

export const Tooltip = (props: Props) => {
  return (
    <div>
      <Radix.Provider>
        <Radix.Root>
          <Radix.Trigger asChild className="cursor-pointer">
            {props.children}
          </Radix.Trigger>
          <Radix.Content className="flex items-center gap-2 px-2 py-1 bg-blue-400 rounded-[5px] text-white">
            <Radix.Arrow className="fill-blue-400" />
            <span className="text-sm  text-white">{props.tooltip_text}</span>
          </Radix.Content>
        </Radix.Root>
      </Radix.Provider>
    </div>
  );
};
