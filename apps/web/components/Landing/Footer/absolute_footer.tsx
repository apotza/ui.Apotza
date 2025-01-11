import React from "react";
import Brand_logo from "../../ui/brand_logo";

type Props = {};

const Absolute_footer = (props: Props) => {
  return (
    <div className="flex top-15 h-[200px] justify-center bg-gradient-to-tr from-transparent  via-black/80 items-center to-blue-950 gap-[100px] ">
      <Brand_logo />
      <div className="text-gray-400 text-center">
        © 2025 Apotza UI KIT <br />{" "}
        <span className="text-sm">All Rights Reserved</span>
      </div>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default Absolute_footer;
