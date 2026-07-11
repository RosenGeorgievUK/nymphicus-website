type NodeDef = {
  id: string;
  label: string;
  x: number;
  y: number;
  delay: string;
};

const nodes: NodeDef[] = [
  { id: "trigger", label: "Trigger", x: 60, y: 140, delay: "0s" },
  { id: "kb", label: "Knowledge Base", x: 200, y: 60, delay: "0.15s" },
  { id: "llm", label: "LLM", x: 340, y: 140, delay: "0.3s" },
  { id: "mcp", label: "MCP Tool", x: 480, y: 60, delay: "0.45s" },
  { id: "cond", label: "Condition", x: 620, y: 140, delay: "0.6s" },
  { id: "out", label: "Output", x: 760, y: 80, delay: "0.75s" },
];

const edges: [string, string][] = [
  ["trigger", "kb"],
  ["kb", "llm"],
  ["llm", "mcp"],
  ["mcp", "cond"],
  ["cond", "out"],
  ["trigger", "llm"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

type NodeCanvasHeroProps = {
  className?: string;
};

export function NodeCanvasHero({ className = "" }: NodeCanvasHeroProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-nym-lg border border-marketing-border bg-marketing-surface shadow-2xl ${className}`}
      role="img"
      aria-label="Stylized agent builder canvas with connected nodes: Trigger, Knowledge Base, LLM, MCP Tool, Condition, and Output"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-nym-primary-50 to-transparent opacity-60" aria-hidden />

      <svg
        viewBox="0 0 860 240"
        className="relative w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--nym-primary)" />
            <stop offset="100%" stopColor="var(--nym-secondary)" />
          </linearGradient>
          <linearGradient id="node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--nym-primary)" />
            <stop offset="100%" stopColor="var(--nym-secondary)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid dots */}
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="rgba(255,255,255,0.06)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Edges */}
        {edges.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          const mx = (a.x + 70 + b.x) / 2;
          const my = (a.y + 20 + b.y + 20) / 2;
          return (
            <path
              key={`${from}-${to}`}
              d={`M ${a.x + 70} ${a.y + 20} Q ${mx} ${my - 30} ${b.x} ${b.y + 20}`}
              fill="none"
              stroke="url(#edge-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              className="motion-safe:animate-pulse-edge"
              style={{ animationDelay: `${i * 0.3}s` }}
              opacity="0.7"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            className="motion-safe:animate-node-in"
            style={{ animationDelay: node.delay, transformOrigin: `${node.x + 35}px ${node.y + 20}px` }}
          >
            <rect
              x={node.x}
              y={node.y}
              width="140"
              height="40"
              rx="8"
              fill="var(--nym-surface-muted)"
              stroke="url(#node-grad)"
              strokeWidth="1.5"
              filter="url(#glow)"
            />
            <text
              x={node.x + 70}
              y={node.y + 25}
              textAnchor="middle"
              fill="var(--nym-text)"
              fontFamily="Space Grotesk, sans-serif"
              fontSize="12"
              fontWeight="500"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
