"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type GradientButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  size?: "sm" | "md" | "lg";
  eventName?: string;
  eventProps?: Record<string, string>;
  children: ReactNode;
};

const sizeClasses = {
  sm: "rounded-nym-sm px-2 py-[0.26rem] text-xs",
  md: "px-[1.375rem] py-2 text-button",
  lg: "px-4 py-[0.45rem] text-[0.95rem]",
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function GradientButton({
  href,
  children,
  className = "",
  size = "md",
  eventName,
  eventProps,
  onClick,
  ...props
}: GradientButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-nym border border-nym-primary bg-nym-primary font-normal text-white shadow-none transition-colors hover:border-transparent hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nym-primary ${sizeClasses[size]} ${className}`;

  const handleClick: ComponentPropsWithoutRef<"a">["onClick"] = (event) => {
    if (eventName) {
      trackEvent(eventName, {
        ...eventProps,
        destination: href,
      });
    }
    onClick?.(event);
  };

  if (isExternal(href)) {
    return (
      <a href={href} className={classes} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
