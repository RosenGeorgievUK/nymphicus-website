type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const widthClass = Tag === "h1" ? "max-w-4xl" : "max-w-3xl";

  return (
    <div className={`${widthClass} ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-4">
          <span className="inline-flex items-center rounded-full border border-nym-primary/25 bg-nym-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-nym-primary">
            {eyebrow}
          </span>
        </p>
      )}
      <Tag
        id={id}
        className={`font-semibold text-marketing-text ${
          Tag === "h1" ? "text-hero" : "text-section-title"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-marketing-text-muted md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
