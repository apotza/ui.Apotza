import React from "react";
import { Index } from "./src";

type Props = {};

export const Usage = (props: Props) => {
  return (
    <div className="">
      <Index onChange={(checked) => console.log(checked)} />
    </div>
  );
};
