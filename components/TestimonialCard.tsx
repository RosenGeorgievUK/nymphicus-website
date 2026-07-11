import Link from "next/link";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  caseStudySlug?: string;
};

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-nym-primary-100 text-sm font-semibold text-nym-primary"
      aria-hidden
    >
      {initials}
    </div>
  );
}

export function TestimonialCard({ quote, name, role, company, caseStudySlug }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-nym-lg border border-marketing-border bg-marketing-surface p-6 md:p-8">
      <p className="flex-1 text-base leading-relaxed text-marketing-text md:text-lg">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-marketing-border pt-6">
        <AvatarPlaceholder name={name} />
        <div>
          <cite className="not-italic font-semibold text-marketing-text">{name}</cite>
          <p className="text-sm text-marketing-text-muted">
            {role}, {company}
          </p>
          {caseStudySlug && (
            <Link
              href={`/customers/${caseStudySlug}`}
              className="nym-focus mt-2 inline-block text-xs font-medium text-nym-primary hover:underline"
            >
              Read case study →
            </Link>
          )}
        </div>
      </footer>
    </blockquote>
  );
}
