import React from "react";
import type { IFeatureCard } from "../types/types";

const FeaturesCard: React.FC<IFeatureCard> = ({
  image,
  label,
  description,
}) => {
  return (
    <div className="bg-blue-200 rounded-md p-5 hover:shadow-md hover:duration-300 cursor-pointer">
      <div className="bg-[#f5f5f7] inline-block rounded-xl p-2">
        <img src={image} alt="artificial-Intelligence" className="w-10" />
      </div>

      <p className="font-medium text-xl mt-3">{label}</p>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
};

export default FeaturesCard;
