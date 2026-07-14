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
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-marketing-border">
            <th scope="col" className="py-4 pr-4 font-medium text-marketing-text-muted">
              Capability
            </th>
            <th scope="col" className="py-4 px-4 font-semibold text-nym-primary">
              Nymphi
            </th>
            <th scope="col" className="py-4 px-4 font-medium text-marketing-text-muted">
              n8n
            </th>
            <th scope="col" className="py-4 pl-4 font-medium text-marketing-text-muted">
              Zapier
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-marketing-border/60">
              <th scope="row" className="py-4 pr-4 font-medium text-marketing-text">
                {row.feature}
              </th>
              <td className="py-4 px-4 text-marketing-text">{row.nymphi}</td>
              <td className="py-4 px-4 text-marketing-text-muted">{row.n8n}</td>
              <td className="py-4 pl-4 text-marketing-text-muted">{row.zapier}</td>
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
