"use client";

import { PropsWithChildren } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

export default function ProductsCarousel({ children }: PropsWithChildren) {
  return (
    <Carousel
      className="mx-auto hidden w-[380px] cursor-grab rounded-md sm:w-[500px] md:w-[600px] lg:w-[700px] 2xl:block 2xl:w-[500px]"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="w-full items-center">
        {children}
      </CarouselContent>
      <CarouselPrevious className=" h-12 w-12" />
      <CarouselNext className=" h-12 w-12" />
    </Carousel>
  );
}
