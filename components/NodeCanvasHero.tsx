import {
  SUPPORT_TRIAGE_HERO_NODES,
  TEMPLATE_WORKFLOWS,
  nodeIconColor,
} from "@/lib/platform-ui";

type NodeDef = {
  id: string;
  label: string;
  x: number;
  y: number;
  delay: string;
};

const nodes: NodeDef[] = SUPPORT_TRIAGE_HERO_NODES.map((label, i) => ({
  id: `n-${i}`,
  label,
  x: 24 + i * 118,
  y: i % 2 === 0 ? 88 : 128,
  delay: `${i * 0.12}s`,
}));

const edges: [number, number][] = nodes.slice(0, -1).map((_, i) => [i, i + 1]);

function getNode(index: number) {
  return nodes[index]!;
}

type NodeCanvasHeroProps = {
  className?: string;
};

export function NodeCanvasHero({ className = "" }: NodeCanvasHeroProps) {
  const classifyOutputs = TEMPLATE_WORKFLOWS.supportWorkflow.classifyOutputs ?? [];

  return (
    <div
      className={`relative overflow-hidden rounded-nym-lg border border-marketing-border bg-[#F8F9FD] shadow-2xl ${className}`}
      role="img"
      aria-label="Support Triage Agent workflow: Start, Classify Ticket, Search Knowledge Base, Draft Reply, Update Intercom, Human Review, End"
    >
      <svg viewBox="0 0 900 220" className="relative w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-canvas-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="#e2e8f0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-canvas-dots)" />

        {edges.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          return (
            <path
              key={`${from}-${to}`}
              d={`M ${a.x + 100} ${a.y + 18} C ${(a.x + b.x) / 2 + 50} ${a.y - 10}, ${(a.x + b.x) / 2 + 50} ${b.y + 40}, ${b.x} ${b.y + 18}`}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeLinecap="round"
              className="motion-safe:animate-pulse-edge"
              style={{ animationDelay: `${i * 0.25}s` }}
              opacity="0.65"
            />
          );
        })}

        {nodes.map((node, index) => (
          <g
            key={node.id}
            className="motion-safe:animate-node-in"
            style={{
              animationDelay: node.delay,
              transformOrigin: `${node.x + 50}px ${node.y + 18}px`,
            }}
          >
            <rect
              x={node.x}
              y={node.y}
              width="100"
              height="36"
              rx="8"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            <rect
              x={node.x + 8}
              y={node.y + 11}
              width="14"
              height="14"
              rx="3"
              fill={nodeIconColor(node.label)}
            />
            <text
              x={node.x + 28}
              y={node.y + 22}
              fill="#334155"
              fontFamily="Space Grotesk, sans-serif"
              fontSize="11"
              fontWeight="500"
            >
              {node.label.length > 12 ? `${node.label.slice(0, 11)}…` : node.label}
            </text>
            {node.label === "Classify Ticket" &&
              classifyOutputs.map((out, oi) => (
                <text
                  key={out}
                  x={node.x + 50}
                  y={node.y + 52 + oi * 11}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="8"
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="600"
                >
                  {out}
                </text>
              ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
