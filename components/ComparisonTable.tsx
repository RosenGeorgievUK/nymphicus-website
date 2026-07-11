import Link from "next/link";
import { comparisonRows } from "@/lib/comparison";

type ComparisonTableProps = {
  compact?: boolean;
  className?: string;
};

export function ComparisonTable({ compact = false, className = "" }: ComparisonTableProps) {
  const rows = compact ? comparisonRows.slice(0, 5) : comparisonRows;

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-marketing-border">
            <th scope="col" className="py-4 pr-4 font-medium text-marketing-text-muted">
              Capability
            </th>
            <th scope="col" className="py-4 px-4 font-semibold text-nym-primary">
              Nymphicus
            </th>
            <th scope="col" className="py-4 px-4 font-medium text-marketing-text-muted">
              Credit copilots
            </th>
            <th scope="col" className="py-4 pl-4 font-medium text-marketing-text-muted">
              DIY frameworks
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-marketing-border/60">
              <th scope="row" className="py-4 pr-4 font-medium text-marketing-text">
                {row.feature}
              </th>
              <td className="py-4 px-4 text-marketing-text">{row.nymphicus}</td>
              <td className="py-4 px-4 text-marketing-text-muted">{row.creditCopilots}</td>
              <td className="py-4 pl-4 text-marketing-text-muted">{row.diyFrameworks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {compact && (
        <p className="mt-6 text-center">
          <Link
            href="/compare"
            className="nym-focus rounded-nym text-sm font-medium text-nym-primary hover:underline"
          >
            See full comparison →
          </Link>
        </p>
      )}
    </div>
  );
}
