import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type GhostButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  size?: "sm" | "md" | "lg";
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

export function GhostButton({
  href,
  children,
  className = "",
  size = "md",
  ...props
}: GhostButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-nym border border-marketing-border bg-transparent font-medium text-marketing-text transition-colors hover:border-nym-primary/40 hover:bg-nym-primary-50 hover:text-marketing-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nym-primary ${sizeClasses[size]} ${className}`;

  if (isExternal(href)) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
