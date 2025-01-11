"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  path?: string;
};

const Navigation_button = ({ name, path }: Props) => {
  const [hover, setHover] = React.useState(false);

  const spanClass = {
    "translate-x-0 duration-300": !hover,
    "translate-x-2 bold scale-110 text-green-500": hover,
  };

  return (
    <Button
      className=" mx-5 rounded-full bg-slate-900 hover:bg-slate-400/70 font-bold uppercase"
      onClick={() => redirect(path || "/")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className={cn("text-white", spanClass)}>{name}</span>
    </Button>
  );
};

export default Navigation_button;
