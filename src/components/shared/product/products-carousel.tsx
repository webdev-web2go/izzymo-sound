"use client";

import Product from "~/components/shared/product/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import type { ProductI } from "~/types";

export default function ProductsCarousel({
  products,
}: {
  products: ProductI[];
}) {
  return (
    <Carousel
      className="mx-auto hidden w-[380px] cursor-grab rounded-md sm:w-[500px] md:w-[600px] lg:w-[700px] 2xl:block 2xl:w-[500px]"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="w-full items-center">
        {products.map((product) => (
          <CarouselItem key={product.image} className="w-full">
            <Product
              key={product.image}
              feature={product.system ?? product.power!}
              href={product.href}
              image={product.image}
              model={product.model}
              price={product.price}
              productFunction={product.productFunction}
              size={product.size}
              isCarousel
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" h-12 w-12" />
      <CarouselNext className=" h-12 w-12" />
    </Carousel>
  );
}
