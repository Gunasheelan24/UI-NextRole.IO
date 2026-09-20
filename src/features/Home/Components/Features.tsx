import React from "react";
import FeaturesCard from "./FeaturesCard";
import {
  history,
  jobCv,
  Score,
  artificialIntelligence,
  editor,
} from "../../../assets/png/Index";
import { Card } from "../../../components/ui/card";
import type { IFeatureCard } from "../types/types";

const Features: React.FC = () => {
  const featuresObj: Array<IFeatureCard> = [
    {
      image: Score,
      label: "ATS score",
      description:
        "See your ATS pass score before you apply. Know exactly which keywords are missing.",
    },
    {
      image: editor,
      label: "LaTeX editor + live PDF",
      description:
        "Monaco editor with LaTeX syntax highlighting. Compile and see your PDF update instantly like Overleaf, with AI inside.",
    },
    {
      image: jobCv,
      label: "Job description matching",
      description:
        "Paste any JD AI maps every skill and requirement against your resume and tells you exactly what to fix.",
    },
    {
      image: history,
      label: "Version history",
      description:
        "Every edit auto-saved. Roll back to any version of your resume, anytime.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center bg-[#fbfbfd] pt-10">
      <section className="text-center">
        <p className="text-primary mb-4">Features</p>
        <h1 className="text-4xl md:text-5xl font-inter font-bold md:mb-3 mb-3">
          Built different.
        </h1>
        <h1 className="text-4xl md:text-5xl font-inter font-bold md:mb-7 mb-4">
          Actually works.
        </h1>

        <div className="flex justify-center">
          <p className="w-[80%] text-muted-foreground md:text-xl text-md">
            Not just another resume checker. A full AI editor that reads,
            rewrites, and compiles your LaTeX resume in real time.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-[2fr_1fr] md:w-[80vw] mt-15 w-[95vw] gap-x-5 gap-y-5 mb-10 [&>div]:bg-[#ffffff]">
        <div className="md:col-span-2 rounded-md p-5 hover:shadow-md hover:duration-300 cursor-pointer">
          <div className="bg-[#fff7ed] inline-block rounded-xl p-2">
            <img
              src={artificialIntelligence}
              alt="artificial-Intelligence"
              className="w-10"
            />
          </div>

          <p className="font-medium text-xl mt-3">
            AI that rewrites, not just suggests
          </p>

          <p className="text-muted-foreground mt-2 text-sm md:text-md">
            Most tools give vague tips. ResumeAI rewrites your weak bullet
            points with impact metrics, action verbs, and keywords from the job
            description.
          </p>

          <Card className="p-5 mt-3 bg-[#f5f5f7]">
            {/* Before code */}
            <section>
              <p className="text-muted-foreground">Before:</p>
              <p className="text-muted-foreground mt-2">
                Worked on
                <span className="text-blue-400"> various React projects</span>
              </p>
            </section>

            {/* After Code */}
            <section>
              <p className="text-muted-foreground">After:</p>
              <p className="text-muted-foreground mt-2 bg-[#e7e7f6] p-1 rounded-sm border-s-4 border-[#6366f1]">
                <span className="text-[#8b8bf2]">Led React migration</span>{" "}
                <span className="text-[#77bd92]">reducing bundle by 35%</span>
              </p>
            </section>
          </Card>
        </div>

        {featuresObj.map((feature) => (
          <FeaturesCard {...feature} />
        ))}
      </section>
    </main>
  );
};

export default Features;
