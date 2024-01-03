"use client";

import { cn } from "~/lib/utils";
import { usePathname } from "~/navigation";

export default function NavBackground() {
  const pathname = usePathname();
  return (
    <div
      aria-hidden={true}
      className={cn("absolute inset-0 -z-10 backdrop-blur-sm", {
        "bg-primary/80": pathname === "/",
        "bg-black/50": pathname !== "/",
      })}
    />
  );
}
