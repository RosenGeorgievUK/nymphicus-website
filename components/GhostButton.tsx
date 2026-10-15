import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type GhostButtonProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  size?: "sm" | "md" | "lg";
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

export function GhostButton({
  href,
  children,
  className = "",
  size = "md",
  ...props
}: GhostButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-nym border border-marketing-border bg-marketing-surface font-normal text-marketing-text shadow-none transition-colors hover:bg-nym-list focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nym-primary ${sizeClasses[size]} ${className}`;

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
