import { HeroBackground } from "@/components/HeroBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden pb-12 pt-14 md:pb-16 md:pt-20 ${className}`}>
      <HeroBackground />
      <div className="relative mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            as="h1"
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align={align}
          />
        </ScrollReveal>
        {children && (
          <div className="relative mx-auto mt-10 max-w-5xl md:mt-12">{children}</div>
        )}
      </div>
    </section>
  );
}
