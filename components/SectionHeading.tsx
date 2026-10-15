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
        <span className="inline-flex items-center rounded-full border border-marketing-border bg-marketing-surface px-3 py-1 text-xs font-normal text-marketing-text shadow-nym">
            {eyebrow}
          </span>
        </p>
      )}
      <Tag
        id={id}
        className={`text-marketing-text ${
          Tag === "h1" ? "text-hero font-bold" : "text-section-title font-semibold"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-marketing-text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}
