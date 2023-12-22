"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { heroImages } from "~/constants";

export default function Carrusel() {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      let index = imageIndex;
      if (index >= heroImages.length - 1) {
        index = 0;
      } else index++;

      setImageIndex(index);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIndex]);
  return (
    <picture className="relative flex h-[700px] w-[700px] items-center justify-center overflow-hidden rounded-md">
      {heroImages.map((img) => (
        <Image
          key={img}
          src={heroImages[imageIndex]!}
          alt="Un evento social donde utilizan equipo de izzymo sound"
          width={800}
          height={800}
          priority
          className={cn("absolute transition-opacity duration-1000", {
            "opacity-0": !img.includes((imageIndex + 1).toString()),
            "opacity-100": img.includes((imageIndex + 1).toString()),
          })}
        />
      ))}
      <div
        aria-hidden={true}
        className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-foreground/40"
      />
    </picture>
  );
}
