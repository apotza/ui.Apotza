import React from "react";
import Text from "./Text_section";
import Image_corousel from "./Image_corousel";

// type Props = {}

const Herobanner = () => {
  return (
    // Gave It H-screen for Bg-gradient and divided into 2 section One hero Text and Hero Gallery
    <div className="relative h-screen  bg-gradient-to-l from-blue-900/80 to-black flex flex-col justify-center z-0">
      {/* Hero Text */}
      <Text />
      {/* Hero Gallery */}
      <Image_corousel />
    </div>
  );
};

export default Herobanner;
