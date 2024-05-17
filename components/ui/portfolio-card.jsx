import React from "react";
import Polaroid from "./polaroid";
import Arrow from "../illustrations/arrow";

const PortfolioCard = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-2 portfolio-card-container">
      <Polaroid img={img} />
      <div className="font-Marcellus">
        <h3 className="text-xl lg:text-lg">{title}</h3>
        <p className="lg:text-sm relative w-fit flex items-center gap-1">
          Read the story
          <Arrow />
          <span className="read"></span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
