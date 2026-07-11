import Link from "next/link";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/lib/testimonials";

export function TestimonialGrid() {
  return (
    <section className="section-y" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Illustrative feedback"
            title="Built for teams who can't ship black-box copilots"
            subtitle="Representative quotes from the types of teams we build for — speed, control, and governance without trade-offs."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <ScrollReveal key={item.name}>
              <TestimonialCard
                quote={item.quote}
                name={item.name}
                role={item.role}
                company={item.company}
                caseStudySlug={item.caseStudySlug}
              />
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/customers"
            className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            See all example workflows →
          </Link>
        </p>
      </div>
    </section>
  );
}
