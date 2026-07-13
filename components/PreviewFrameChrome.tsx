export function PreviewFrameChrome() {
  return (
    <div className="flex items-center gap-2 border-b border-marketing-border bg-marketing-surface-elevated px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-nym-danger/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-nym-warning/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-nym-success/80" />
      <span className="ml-3 flex-1 rounded bg-marketing-bg/60 py-1 text-center text-[10px] text-marketing-text-muted">
        app.nymphi.ai
      </span>
    </div>
  );
}
