type SectionDividerProps = {
  className?: string;
};

export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div
      className={`section-divider mx-auto max-w-nym ${className}`}
      role="separator"
      aria-hidden
    />
  );
}
