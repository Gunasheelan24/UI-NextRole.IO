import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { star } from "../../../assets/png/Index";
import { Card as CardStyle } from "../../../components/ui/card";

const Card: React.FC = () => {
  return (
    <CardStyle className="flex-1 p-5 h-69 w-90 border-transparent">
      <section className="flex gap-1 text-yellow-600">
        <img src={star} alt="star" className="w-3.5" />
        <img src={star} alt="star" className="w-3.5" />
        <img src={star} alt="star" className="w-3.5" />
        <img src={star} alt="star" className="w-3.5" />
        <img src={star} alt="star" className="w-3.5" />
      </section>

      <section>
        <p className="text-muted-foreground font-light text-xl">
          "I applied to 40 jobs with my old resume and heard nothing. Used
          ResumeAI, applied to 5, got 3 interviews. This thing actually works."
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 -mt-1">
          {/* Avatar */}
          <Avatar className="mt-5">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="mt-5">
            <h3 className="text-[0.9rem] font-inter font-bold">Arun Kumar</h3>
            <h4 className="text-[0.8rem] font-inter font-bold text-muted-foreground">
              Frontend Dev · Hired at Swiggy
            </h4>
          </div>
        </div>
      </section>
    </CardStyle>
  );
};

export default Card;
