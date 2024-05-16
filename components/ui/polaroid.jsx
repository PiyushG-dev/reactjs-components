import React from "react";
import Image from "next/image";

const Polaroid = ({ img }) => {
  return (
    <div className="h-full pb-16 bg-white sm:h-[450px]">
      <Image src={img} alt="story" className="h-full object-cover px-3 pt-3" />
    </div>
  );
};

export default Polaroid;
