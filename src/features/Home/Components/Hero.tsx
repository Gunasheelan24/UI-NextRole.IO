import React from "react";
import { Badge } from "../../../components/ui/badge";

const Hero: React.FC = () => {
  return (
    <main className="h-[90vh] flex">
      <section className="flex-1">
        <Badge className="bg-white text-black">
          AI-powered resume optimization now live
        </Badge>
      </section>
      <section className="flex-1"></section>
    </main>
  );
};

export default Hero;
