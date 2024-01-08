import type { ProductI } from "~/types";
import Product from "./product-card";
import { cn } from "~/lib/utils";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  products: ProductI[];
}

export default function ProductsGrid({ products, className }: Props) {
  return (
    <div className={cn("grid gap-10 px-4 py-10 2xl:grid-cols-2", className)}>
      {products.map((product) => (
        <Product
          key={product.image}
          model={product.model}
          size={product.size}
          productFunction={product.productFunction}
          feature={product.system ?? product.power!}
          price={product.price}
          href={product.href}
          image={product.image}
        />
      ))}
    </div>
  );
}
