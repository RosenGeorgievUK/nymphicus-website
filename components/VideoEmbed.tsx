type VideoEmbedProps = {
  url: string;
  title?: string;
  className?: string;
};

function toEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.slice(1);
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsed.hostname.includes("loom.com")) {
      const shareMatch = parsed.pathname.match(/\/share\/([a-zA-Z0-9]+)/);
      if (shareMatch) return `https://www.loom.com/embed/${shareMatch[1]}`;
    }

    if (parsed.pathname.includes("/embed/")) {
      return url;
    }

    return null;
  } catch {
    return null;
  }
}

export function VideoEmbed({ url, title = "Product demo video", className = "" }: VideoEmbedProps) {
  const embedUrl = toEmbedUrl(url);

  if (!embedUrl) return null;

  return (
    <div
      className={`browser-glow relative overflow-hidden rounded-nym-lg border border-marketing-border bg-marketing-surface shadow-2xl ${className}`}
    >
      <div className="relative aspect-video w-full">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
