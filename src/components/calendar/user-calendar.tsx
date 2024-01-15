"use client";

import React, { useState } from "react";
import Calendar from "./calendar";
import Image from "next/image";
import type { ProductI } from "~/types";
import { cn } from "~/lib/utils";
import { useTranslations } from "next-intl";

export default function UserCalendar() {
  const [product, setProduct] = useState<ProductI | null>(null);
  const t = useTranslations("home");

  return (
    <div className="flex flex-col gap-10 py-10" id="user-calendar">
      <header className="flex flex-col items-center">
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t("reserved")}
        </h2>
        <p className="text-xl font-semibold text-muted-foreground antialiased">
          {t("clickTag")}
        </p>
      </header>
      <div
        className={cn("mx-auto w-full px-4 xl:px-20", {
          "grid gap-10 md:grid-cols-[2fr_1fr]": !!product,
          "max-w-7xl": !product,
        })}
      >
        <div className="">
          <Calendar isForUser setProduct={setProduct} />
        </div>
        {!!product && (
          <div>
            <Image
              src={product?.image as string}
              alt={`${product?.model} ${product?.productFunction}`}
              width={300}
              height={300}
              className="h-auto w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
