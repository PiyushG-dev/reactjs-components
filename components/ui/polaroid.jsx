import React from "react";
import Image from "next/image";

const Polaroid = ({ img }) => {
  return (
    <div className="polaroid-container relative h-full pb-16 bg-white sm:h-[450px]">
      <Image src={img} alt="story" className="h-full object-cover px-3 pt-3" />
      <div className="overlay">
        <div className="font-Marcellus text-lg px-6">
          <p>
            Pragya and Adil’s story was no other than a match made in heaven. An
            intimate journey immersed with love and laughter with family and
            friends from far and near.
          </p>
        </div>
        <p className="date text-xl text-quaternary font-Marcellus absolute bottom-4">
          Jan 2024
        </p>
      </div>
    </div>
  );
};

export default Polaroid;
