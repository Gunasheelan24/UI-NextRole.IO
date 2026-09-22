import React from "react";
import CustomInput from "../../../components/custom/CustomInput";
import { Button } from "../../../components/ui/button";

const Footer: React.FC = () => {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0f1017]">
        <div className="absolute -top-40 left-20 h-[500px] w-[800px] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute-bottom-40right-20h-[500px]w-[500px]rounded-full bg-emerald-500/20 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center text-white md:p-50 p-20 font-inter">
          <h1 className="md:text-6xl text-2xl font-bold">Ready to land</h1>
          <h1 className="md:text-6xl text-4xl font-bold mt-2">that job?</h1>
          <p className="mt-4 text-sm text-center  md:text-xl font-bold text-muted-foreground">
            Join 12,000+ developers who stopped guessing and started getting
            interviews.
          </p>

          <div className="flex items-center gap-3 mt-3 md:mt-8">
            <CustomInput
              label={false}
              labelText="email"
              inputId="email"
              inputPlaceholder="Enter your email"
              inputType="email"
              inputClassName="bg-[#3c3c3f] border-[#6c6c70] w-50 md:w-75 md:h-13 h-10 rounded-4xl ps-6! md:placeholder:text-[1.1rem]! md:text-[1.1rem]"
            />
            <Button className="md:w-50 w-40 md:h-13 h-10 rounded-full md:text-md font-normal cursor-pointer hover:bg-amber-50 bg-white text-black">
              Get started free
            </Button>
          </div>
          <p className="mt-3 md:text-md text-[0.8rem] text-muted-foreground">
            No credit card required · Free plan available
          </p>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Footer;
