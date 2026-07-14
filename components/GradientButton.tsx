"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type GradientButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  eventName?: string;
  eventProps?: Record<string, string>;
  children: ReactNode;
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

function isExternal(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

export function GradientButton({
  href,
  children,
  className = "",
  size = "md",
  glow = false,
  eventName,
  eventProps,
  onClick,
  ...props
}: GradientButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-nym bg-gradient-nym font-medium text-on-gradient shadow-nym-primary transition-all hover:shadow-lg hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nym-primary ${glow ? "btn-glow" : ""} ${sizeClasses[size]} ${className}`;

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
