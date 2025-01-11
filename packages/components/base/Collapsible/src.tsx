import React from "react";

import * as Radix from "@radix-ui/react-collapsible";

type Props = {
  children: React.ReactNode;
};

export const Collapsible = (props: Props) => {
  return (
    <div>
      <Radix.Root>{props.children}</Radix.Root>
    </div>
  );
};
export const Trigger = (props: Props) => {
  return (
    <div>
      <Radix.Trigger>{props.children}</Radix.Trigger>
    </div>
  );
};
export const Content = (props: Props) => {
  return (
    <div>
      <Radix.Content>{props.children}</Radix.Content>
    </div>
  );
};
