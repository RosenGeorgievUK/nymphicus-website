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

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-nym-primary">
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={`font-semibold leading-tight text-marketing-text ${
          Tag === "h1"
            ? "text-[clamp(2.5rem,6vw,4.5rem)]"
            : "text-[clamp(1.75rem,4vw,2.75rem)]"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-marketing-text-muted md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
