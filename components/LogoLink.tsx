"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/SiteShell";

type LogoLinkProps = {
  onClick?: () => void;
  size?: "sm" | "md";
};

export function LogoLink({ onClick, size = "md" }: LogoLinkProps) {
  const { dict, path } = useLocale();
  const height = size === "sm" ? "h-7" : "h-8";

  return (
    <Link
      href={path("/")}
      onClick={onClick}
      className="nym-focus group inline-flex shrink-0 items-center rounded-nym py-1"
      aria-label={dict.nav.ariaHome}
    >
      <Image
        src="/branding/assets/logo-wordmark-dark.svg"
        alt="Nymphicus"
        width={160}
        height={36}
        className={`${height} w-auto transition-opacity group-hover:opacity-90`}
        priority
      />
    </Link>
  );
}
