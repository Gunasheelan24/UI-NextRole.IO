import React from "react";
import Card from "./Card";

const Review: React.FC = () => {
  return (
    <main className="h-[80vh] flex flex-col justify-center items-center ">
      <section className="text-center">
        <p className="text-primary mb-4">What people say</p>
        <h1 className="text-5xl font-inter font-bold">
          They got the interview.
        </h1>
        <h1 className="text-5xl font-inter font-bold mt-3 mb-18">
          You can too.
        </h1>
      </section>
      <section className="flex p-10 gap-10 -mt-15">
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default Review;
