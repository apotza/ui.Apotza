import React from "react";
import { CheckBox } from "./src";

type Props = {};

const Checkbox_Usage = (props: Props) => {
  return (
    <div className="">
      <div>Checkbox</div>
      <CheckBox onChange={(checked) => console.log(checked)} />
    </div>
  );
};

export default Checkbox_Usage;
