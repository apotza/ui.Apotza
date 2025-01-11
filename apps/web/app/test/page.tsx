import React from "react";
import { Collapsible } from "@repo/components/core/Collapsible";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 h-1/3 bg-blue-500 text-center rounded-xl">
        {" "}
        This is Test Region <br />{" "}
        <Collapsible>
          <div>This is Collapsible</div>
        </Collapsible>
      </div>
    </div>
  );
};

export default page;
