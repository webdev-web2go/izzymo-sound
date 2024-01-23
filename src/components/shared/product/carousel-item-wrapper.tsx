"use client";

import type { PropsWithChildren } from "react";
import { CarouselItem } from "~/components/ui/carousel";

interface Props {
  className?: string;
}

export default function CarouselItemWrapper({
  children,
  className,
}: Props & PropsWithChildren) {
  return <CarouselItem className={className}>{children}</CarouselItem>;
}
