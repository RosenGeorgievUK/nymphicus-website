type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
  size?: "default" | "lg" | "compact";
  bordered?: boolean;
};

const sizeClasses = {
  default: "py-16 md:py-20",
  lg: "py-16 md:py-24",
  compact: "py-12 md:py-16",
};

export function PageSection({
  children,
  className = "",
  id,
  ariaLabelledBy,
  size = "default",
  bordered = true,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${bordered ? "border-t border-marketing-border" : ""} ${sizeClasses[size]} ${className}`}
    >
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
