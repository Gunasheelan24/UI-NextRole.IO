import React from "react";
import DashboardCard from "./DashboardCard";
import { Button } from "../../../components/ui/button";
import { FileText, Send, Target, Trophy } from "lucide-react";
import { ArrowLeft } from "./ArrowLeft";
import { Badge } from "../../../components/ui/badge";
import { Progress } from "../../../components/ui/progress";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const Dashboard: React.FC = () => {
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
      textColor: "text-black",
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
      textColor: "text-black",
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
      textColor: "text-black",
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
      textColor: "text-black",
      progressColor: "bg-emerald-500",
    },
  ];

  const RecentApplication = [
    {
      id: 0,
      role: "Frontend Engineer",
      company: "Zoho Corporation",
      stage: "Selected",
    },
    {
      id: 1,
      role: "Backtend Engineer",
      company: "IBM Corporation",
      stage: "Applied",
    },
    {
      id: 2,
      role: "Backtend Engineer",
      company: "Infosys Corporation",
      stage: "In Review",
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Impelox Tech",
      stage: "Rejected",
    },
  ];

  const topJobMatches = [
    {
      id: 0,
      role: "Senior Frontend Dev",
      company: "Razorpay",
      percentage: 87,
    },
    {
      id: 1,
      role: "React Engineer CRED",
      company: "CRED",
      percentage: 84,
    },
    {
      id: 2,
      role: "UI Developer",
      company: "PhonePe · Remote",
      percentage: 81,
    },
    {
      id: 3,
      role: "Frontend Architect",
      company: "Swiggy",
      percentage: 76,
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
        <section className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4  grid-rows-1 gap-4">
          {resumeAnalysis.map((item) => (
            <DashboardCard {...item} />
          ))}
        </section>
      </main>

      <main className="mt-4 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
        <Card>
          <CardHeader className="flex justify-between">
            <CardTitle className="font-normal">Recent Applications</CardTitle>
            <CardTitle className="font-normal flex items-center text-primary cursor-pointer">
              View all <ArrowLeft size={16} />
            </CardTitle>
          </CardHeader>

          <CardContent>
            {/* Main Content 1 */}
            {RecentApplication.map(({ id, role, company, stage }) => (
              <main key={id} className="flex justify-between items-center mt-4">
                <section className="flex gap-3">
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#f5f5f7]">
                    <p className="tex-center font-medium">
                      <span className="text-blue-400">
                        {company?.split(" ")?.[0]?.[0] ?? company?.[0]}
                      </span>
                      <span className="text-primary">
                        {company?.split(" ")?.[1]?.[0] ?? company?.[1]}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>{role}</p>
                    <p>{company}</p>
                  </div>
                </section>
                <section>
                  <Badge variant="secondary" className="p-3">
                    {stage}
                  </Badge>
                </section>
              </main>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex justify-between">
            <CardTitle className="font-normal">Top Job Matches</CardTitle>
            <CardTitle className="font-normal flex items-center text-primary cursor-pointer">
              Explore <ArrowLeft size={16} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {topJobMatches.map(({ id, role, company, percentage }) => (
              <main key={id} className="flex justify-between items-center mt-4">
                <section className="flex gap-3">
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#f5f5f7]">
                    <p className="tex-center font-medium">
                      <span className="text-blue-400">
                        {company?.split(" ")?.[0]?.[0] ?? company?.[0]}
                      </span>
                      <span className="text-primary">
                        {company?.split(" ")?.[1]?.[0] ?? company?.[1]}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>{role}</p>
                    <p>{company}</p>
                    <Progress value={percentage} className="w-[60%]" />
                  </div>
                </section>
                <section>
                  <p className="p-3 text-md font-bold">{percentage}%</p>
                </section>
              </main>
            ))}
          </CardContent>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
