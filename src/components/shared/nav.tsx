"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { navConfig } from "@/config";

export const Nav = () => {
  const pathname = usePathname();

  if (!navConfig) return null;

  return (
    <nav className="flex items-center gap-4 text-sm xl:gap-12 flex-col medium:flex-row">
      {navConfig?.map(({ title, href = "/" }: any) => (
        <Link
          key={title}
          href={href}
          className={clsx(
            "transition-colors hover:text-foreground/80 text-base font-bold relative",
            pathname === href
              ? "text-foreground active-nav"
              : "text-foreground/60",
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
