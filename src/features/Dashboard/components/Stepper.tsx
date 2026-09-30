import React, { useState } from "react";
import { Check } from "lucide-react";

const Stepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "Resume" },
    { id: 2, label: "Job Description" },
    { id: 3, label: "Optimize" },
  ];

  return (
    <main className="flex justify-center py-8">
      <ul className="flex w-full items-center">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <li key={step.id} className="relative flex flex-1 justify-center">
              {index !== steps.length - 1 && (
                <div className="absolute left-1/2 top-4 h-[2px] w-full bg-zinc-200">
                  <div
                    className={`h-full bg-black transition-all duration-500 ${
                      currentStep > step.id ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}

              {/* Step */}
              <button
                onClick={() => setCurrentStep(step.id)}
                className="relative z-10 flex flex-col items-center bg-white px-4"
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full
                    transition-all duration-300
                    ${
                      isCompleted
                        ? "bg-black text-white border-black"
                        : isActive
                          ? "border-2 border-black bg-white scale-110"
                          : "border border-zinc-300 bg-white text-zinc-400"
                    }
                  `}
                >
                  {isCompleted ? <Check size={16} /> : step.id}
                </div>

                <p
                  className={`
                    mt-3 text-sm transition-colors
                    ${
                      isCompleted || isActive
                        ? "text-black font-medium"
                        : "text-zinc-400"
                    }
                  `}
                >
                  {step.label}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Stepper;
