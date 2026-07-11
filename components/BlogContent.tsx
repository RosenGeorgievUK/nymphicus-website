import type { BlogSection } from "@/lib/blog-posts";

type BlogContentProps = {
  sections: BlogSection[];
};

export function BlogContent({ sections }: BlogContentProps) {
  return (
    <div className="prose-nym mx-auto max-w-2xl">
      {sections.map((section, index) => {
        if (section.type === "heading") {
          return (
            <h2 key={index} className="mt-10 text-xl font-semibold text-marketing-text">
              {section.content}
            </h2>
          );
        }

        if (section.type === "list" && section.items) {
          return (
            <div key={index}>
              {section.content && (
                <p className="mt-6 text-base leading-relaxed text-marketing-text-muted">
                  {section.content}
                </p>
              )}
              <ul className="mt-4 space-y-2 text-marketing-text">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-nym-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <p key={index} className="mt-6 text-base leading-relaxed text-marketing-text-muted md:text-lg">
            {section.content}
          </p>
        );
      })}
    </div>
  );
}
