"use client";

import Product from "~/components/shared/product/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import type { ProductI } from "~/types";

export default function ProductsCarousel({
  mainProduct,
  products,
}: {
  mainProduct: ProductI;
  products: ProductI[];
}) {
  return (
    <Carousel
      className="cursor-grab rounded-md 2xl:w-[500px]"
      //   className="col-start-2"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="items-center">
        {products
          .filter((product) => product.image !== mainProduct.image)
          .map((product) => (
            <CarouselItem key={product.image} className="h-full">
              <Product
                key={product.image}
                feature={(product.system || product.power) as string}
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
      <CarouselPrevious className="h-12 w-12" />
      <CarouselNext className="h-12 w-12" />
    </Carousel>
  );
}
