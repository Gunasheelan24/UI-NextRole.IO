import React from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

const Review: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center pb-30">
      <section className="text-center">
        <p className="text-primary md:mb-4 mb-3">What people say</p>
        <h1 className="text-3xl md:text-5xl font-inter font-bold">
          They got the interview.
        </h1>
        <h1 className="text-3xl md:text-5xl font-inter font-bold md:mt-3  mt-2 mb-8">
          You can too.
        </h1>
      </section>

      {/* Mobile Scrren */}
      <Carousel className="w-[70%] md:w-[80%] max-w-1xl">
        <CarouselContent>
          <CarouselItem className="xl:basis-1/3 md:basis-1/2">
            <Card />
          </CarouselItem>

          <CarouselItem className="xl:basis-1/3 md:basis-1/2">
            <Card />
          </CarouselItem>

          <CarouselItem className="xl:basis-1/3 md:basis-1/2">
            <Card />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};

export default Review;
