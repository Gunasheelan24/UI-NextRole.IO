import React from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import DashboardCard from "./DashboardCard";
import { FileText, Send, Target, Trophy } from "lucide-react";

interface IDashboard {
  lightMode: string;
}

const Dashboard: React.FC<IDashboard> = ({ lightMode }) => {
  console.log(lightMode);
  const resumeAnalysis = [
    {
      id: 0,
      value: 91,
      type: "percentage",
      title: "Top Ranked Resume",
      subtitle: "Frontend Developer Resume",
      description: "Outperforming 9 of your other resumes",
      badge: "+19 pts",
      icon: FileText,
      backgroundColor: "bg-violet-50",
      textColor: "text-violet-700",
      progressColor: "bg-violet-500",
    },
    {
      id: 1,
      value: 87,
      type: "percentage",
      title: "Highest Match Score",
      subtitle: "Frontend Engineer · Google",
      description: "3 opportunities exceed 80% match",
      badge: "+8%",
      icon: Target,
      backgroundColor: "bg-sky-50",
      textColor: "text-sky-700",
      progressColor: "bg-sky-500",
    },
    {
      id: 2,
      value: 12,
      type: "count",
      title: "Active Applications",
      subtitle: "Current hiring pipeline",
      description: "7 under review, 3 awaiting response",
      badge: "+4",
      icon: Send,
      backgroundColor: "bg-orange-50",
      textColor: "text-orange-700",
      progressColor: "bg-orange-500",
    },
    {
      id: 3,
      value: 3,
      type: "count",
      title: "Interviews Landed",
      subtitle: "Interview conversion tracking",
      description: "1 opportunity in final-stage evaluation",
      badge: "25%",
      icon: Trophy,
      backgroundColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      progressColor: "bg-emerald-500",
    },
  ];

  return (
    <React.Fragment>
      <main className="mt-3 flex justify-between items-center h-14 px-3">
        <section>
          <h1 className="text-xl font-medium">
            Hey <span className="text-[#a297dc]">Bella Grace 👋</span>
          </h1>
          <p className="mt-1 font-sm text-muted-foreground">
            Welcome back! Here's what's happening today.
          </p>
        </section>
        <section>
          <Button variant="default" className="px-3 py-4 !bg-[#7867ce]">
            Optimize Your Resume
          </Button>
        </section>
      </main>

      <main className="mt-4">
        <section className="grid grid-cols-4 grid-rows-1 gap-4">
          {resumeAnalysis.map((item) => (
            <DashboardCard {...item} />
          ))}
        </section>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
