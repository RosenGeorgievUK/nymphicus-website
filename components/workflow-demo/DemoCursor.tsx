"use client";

type DemoCursorProps = {
  x: number;
  y: number;
  visible?: boolean;
  clicking?: boolean;
};

export function DemoCursor({ x, y, visible = true, clicking = false }: DemoCursorProps) {
  if (!visible) return null;

  return (
    <div
      className="demo-cursor pointer-events-none absolute z-50"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-2px, -2px)",
      }}
      aria-hidden
    >
      {clicking && <span className="demo-click-ring absolute left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-400" />}
      <svg width="22" height="22" viewBox="0 0 24 24" className="drop-shadow-md" aria-hidden>
        <path
          d="M5 3l3 18 3.5-7.5L19 10 5 3z"
          fill="#fff"
          stroke="#1e293b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
