import React from "react";
import Brand from "./brand";
import Start_now from "./start_now";
import Text from "./text";
import Absolute_footer from "./absolute_footer";
import { Button } from "../../ui/button";

const Footer = () => {
  return (
    <section className="relative w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-transparent gap-[70px] to-blue-950">
      <Text />
      <Brand />
      <div className="h-[80px]">
        <Button className="px-4 bg-pink-500 rounded-full hover:bg-pink-500/70 cursor-pointer">
          Learn More -\{" "}
        </Button>
      </div>
      <Start_now />
      {/* <Absolute_footer /> */}
    </section>
  );
};

export default Footer;
