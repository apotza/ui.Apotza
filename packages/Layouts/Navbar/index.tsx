"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../../../apps/web/components/ui/button";

const NavRedirect = [
  { name: "Home", url: "/home" },
  { name: "Components", url: "/components" },
  { name: "Service", url: "/service" },
  { name: "About", url: "/about" },
];

export const Navbar = ({}) => {
  // Todo (sahil): add scroll event
  // const [open, setOpen] = React.useState(true);
  // const [lastscrollY, setlastscrollY] = React.useState(100);

  // const handleScroll = () => {
  //   if (window.scrollY > lastscrollY) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  //   setlastscrollY(window.scrollY);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastscrollY]);

  return (
    // Main Container
    <>
      <nav className={`fixed top-2 w-full flex justify-center z-20 `}>
        <div className="relative flex justify-between w-full hover:translate-y-2 duration-200 max-w-[1200px] h-20 border-[2px] border-blue-800 backdrop-blur-lg  rounded-full  ">
          {/* Here is Logo */}
          <Link href="/">
            <div className="flex h-full justify-center gap-2 items-center overflow-hidden cursor-pointer ml-14">
              <Image
                src="/apotzalogo.jpeg"
                alt="logo"
                width={20}
                height={20}
                className="rounded-md "
              />
              <span className="font-jakarta font-extrabold text-2xl ">
                Apotza{" "}
              </span>
              <span className="text-slate-200 animate-pulse">UI KIT</span>
            </div>
          </Link>
          {/* Here is seperate container forNavigation and Button Container */}
          <div className="items-center justify-center gap-5 hidden md:flex">
            {/* Here is Navigation */}
            <div>
              <div className={`flex gap-4 justify-around items-center `}>
                {NavRedirect.map((item, index) => (
                  <Link href={item.url} key={index}>
                    <div className="font-jakarta font-medium text-lg text-white hover:text-green-600 cursor-pointer">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            {/* Here is Button */}
            <div className="mr-4">
              <Link href="/components/button">
                <Button className="bg-blue-600 hover:bg-blue-600/70 rounded-full text-green-300 text-lg font-thin">
                  Get Started {"!"}
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex gap-2 px-4">
            <Image src="/assets/next.svg" width={50} height={20} alt="menu" />
          </div>
        </div>
      </nav>
    </>
  );
};
