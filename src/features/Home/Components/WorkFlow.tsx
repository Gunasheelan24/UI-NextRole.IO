import React from "react";

const WorkFlow: React.FC = () => {
  const workFlow: Array<{
    id: number;
    label: string;
    description: string;
  }> = [
    {
      id: 1,
      label: "Paste Your Resume",
      description:
        "Upload or paste your LaTeX resume and prepare it for optimization.",
    },
    {
      id: 2,
      label: "Add the Job Description",
      description:
        "Paste the target job description and let AI identify key requirements.",
    },
    {
      id: 3,
      label: "Review Suggestions",
      description:
        "Review AI-generated suggestions and choose which updates to apply.",
    },
    {
      id: 4,
      label: "Export & Apply",
      description:
        "Download your optimized resume and start applying with confidence.",
    },
  ];

  return (
    <main className="w-screen relative flex flex-col justify-center items-center pt-30 mb-35">
      <section className=" text-center w-[60%] xl:w-[70%] sm:w-[95%]">
        <p className="text-primary md:mb-4 mb-3">How it works</p>
        <h1 className="text-4xl md:text-5xl font-inter font-bold">
          Paste to perfect
        </h1>
        <h1 className="text-4xl md:text-5xl font-inter font-bold mt-3 md:mb-18 mb-10">
          in four steps.
        </h1>

        <ul className="flex flex-col md:flex-row justify-between items-center font-inter relative gap-10">
          <div className="absolute hidden md:inline-block top-6 left-22 sm:left-30 bg-[#e5e5e8] h-[0.1rem] w-[80%] sm:w-[80%]"></div>

          {workFlow.map((item, ind) => (
            <li
              key={ind}
              className="flex-1 flex flex-col hover:-translate-y-1 duration-300 transition-all"
            >
              <div className="flex justify-center items-center">
                {/* WorkFlow Steps */}
                <p className="bg-[#ffffff] px-5 py-3 rounded-full font-extrabold z-10 border hover:bg-[#dec1c1]">
                  {item.id}
                </p>
              </div>

              {/* Label */}
              <h3 className="mt-4 font-semibold tracking-tight">
                {item.label}
              </h3>

              {/* COntent Description */}
              <p className="text-muted-foreground mt-2 text-sm font-normal">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default WorkFlow;
