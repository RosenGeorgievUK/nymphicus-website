import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

type DiffPoint = {
  title: string;
  body: string;
  href: string;
  label: string;
};

type CompactDifferentiatorsProps = {
  eyebrow: string;
  title: string;
  points: DiffPoint[];
  compareLink: string;
  compareHref: string;
};

export function CompactDifferentiators({
  eyebrow,
  title,
  points,
  compareLink,
  compareHref,
}: CompactDifferentiatorsProps) {
  return (
    <section className="section-y border-t border-marketing-border" aria-labelledby="diff-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading id="diff-heading" eyebrow={eyebrow} title={title} align="center" />
        </ScrollReveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {points.map((point) => (
            <ScrollReveal key={point.title}>
              <article className="rounded-nym-lg border border-marketing-border bg-marketing-surface p-5 md:p-6">
                <h3 className="font-semibold text-marketing-text">{point.title}</h3>
                <p className="mt-2 text-sm text-marketing-text-muted">{point.body}</p>
                <Link
                  href={point.href}
                  className="nym-focus mt-4 inline-block text-sm font-medium text-nym-primary hover:underline"
                >
                  {point.label} →
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href={compareHref} className="text-sm font-medium text-nym-primary hover:underline">
            {compareLink}
          </Link>
        </p>
      </div>
    </section>
  );
}
