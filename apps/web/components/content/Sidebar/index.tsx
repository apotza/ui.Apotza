"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { Reference } from "@/constants/Sidebar_Reference";
import Navigation_button from "./Button";

type Props = {};

const Sidebar = ({}: Props) => {
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname) {
      const href = pathname.split("/");
      console.log(href);
    }
  }, [pathname]);

  return (
    <div className="hidden md:flex flex-col z-10 fixed top-0 bottom-0 left-0 my-40 w-[250px] rounded-xl overflow-y-auto bg-gray-700 hover:translate-x-5 ease-in-out duration-500">
      <div className=" sticky z-10 top-0 w-full h-[75px] mb-10 bg-slate-900/80 text-2xl flex justify-center items-center ">
        <span className="font-bold">Components</span>
        <span className="bg-slate-400 rounded-full">✨</span>
      </div>
      <div className="flex flex-col gap-5 my-6">
        {Reference[0]?.children?.map((item, index) => (
          <Navigation_button key={index} name={item.title} path={item.href} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
