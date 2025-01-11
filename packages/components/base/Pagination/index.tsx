import React from "react";
import { Index } from "./src";

type Props = {};

const Pagination_Usage = (props: Props) => {
  return (
    <div className="">
      <Index
        totalPages={20}
        onPageChange={(page) => console.log(`Page changed to ${page}`)}
      />
    </div>
  );
};

export default Pagination_Usage;
