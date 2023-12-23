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
    <div className="relative aspect-square w-full overflow-hidden xl:w-11/12">
      {heroImages.map((img) => (
        <picture
          key={img}
          className={cn(
            "absolute overflow-hidden rounded-md transition-transform duration-1000",
            {
              "-z-10 translate-x-full": !img.includes(
                (imageIndex + 1).toString(),
              ),
              "z-10 translate-x-0": img.includes((imageIndex + 1).toString()),
            },
          )}
        >
          <Image
            src={img}
            alt="Un evento social donde utilizan equipo de izzymo sound"
            width={800}
            height={800}
            priority
          />

          <div
            aria-hidden={true}
            className="absolute inset-0 z-20 bg-gradient-to-br from-primary/40 to-primary-foreground/40"
          />
        </picture>
      ))}
    </div>
  );
}
