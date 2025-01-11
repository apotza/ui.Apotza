"use client";
import Sidebar from "@/components/content/Sidebar";
import React, { useEffect, useState } from "react";
import { data } from "@repo/common";
import { Code_Layout } from "@repo/ui_patterns";

type Props = {
  params: Promise<{ Comp_Id: string }>; // `params` is a Promise
};

export default function CompIdPage({ params }: Props) {
  const [Comp_Id, setComp_Id] = useState("");
  // const [component, setcomponent] = useState(undefined);

  async function getProp() {
    const unwrappedParams = await params;
    const { Comp_Id } = unwrappedParams;
    setComp_Id(Comp_Id);
  }

  // Getting Component data Through Reference
  const Component: any = data[Comp_Id] || null;
  useEffect(() => {
    getProp();
    // console.log(component)
  }, []);

  // const [text, setText] = useState('');

  return (
    <div>
      <div className="relative min-h-screen ">
        <div className="pl-[300px] pt-[150px]">
          {Component && <Component />}
          <div className="h-screen"></div>{" "}
        </div>
      </div>
    </div>
  );
}
