"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroImages } from "~/constants";

export default function HeroCarousel() {
  return (
    <Carousel
      className="relative aspect-square w-full overflow-hidden rounded-md md:w-4/5 xl:w-11/12"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {heroImages.map((img) => (
          <CarouselItem key={img} className="pl-0">
            <picture className="relative w-11/12">
              <Image
                src={img}
                alt="Un evento social donde utilizan equipo de izzymo sound"
                width={800}
                height={800}
                priority
                className="w-full"
              />
              <div
                aria-hidden={true}
                className="absolute inset-0 z-20 bg-gradient-to-br from-primary/40 to-primary-foreground/40"
              />
            </picture>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
