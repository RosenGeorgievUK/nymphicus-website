const metrics = [
  { value: "15", label: "Node types", detail: "Visual canvas" },
  { value: "0%", label: "Credit markup", detail: "BYO API keys" },
  { value: "<1hr", label: "First agent live", detail: "From template" },
  { value: "100%", label: "Runs logged", detail: "Full audit trail" },
];

export function MetricsBand() {
  return (
    <section className="border-y border-marketing-border bg-marketing-surface/60 py-10 md:py-12" aria-label="Platform metrics">
      <div className="mx-auto max-w-nym px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-3xl font-semibold text-gradient md:text-4xl">{metric.value}</p>
              <p className="mt-1 text-sm font-medium text-marketing-text">{metric.label}</p>
              <p className="mt-0.5 text-xs text-marketing-text-muted">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
