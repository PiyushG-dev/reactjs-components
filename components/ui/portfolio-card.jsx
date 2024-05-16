import React from "react";
import Polaroid from "./polaroid";

const PortfolioCard = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-2">
      <Polaroid img={img} />
      <div className="font-Marcellus">
        <h3 className="text-xl lg:text-lg">{title}</h3>
        <p className="lg:text-sm">Read the story</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
