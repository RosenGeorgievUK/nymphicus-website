"use client";

import { useEffect, useState } from "react";

type TemplateFilterBarProps = {
  categories: string[];
  allCategoryLabel: string;
  searchPlaceholder: string;
};

export function TemplateFilterBar({
  categories,
  allCategoryLabel,
  searchPlaceholder,
}: TemplateFilterBarProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(allCategoryLabel);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    document.querySelectorAll<HTMLElement>("[data-template-card]").forEach((card) => {
      const title = card.dataset.title?.toLowerCase() ?? "";
      const description = card.dataset.description?.toLowerCase() ?? "";
      const cardCategory = card.dataset.category ?? "";
      const integrations = card.dataset.integrations?.toLowerCase() ?? "";
      const matchesCategory = category === allCategoryLabel || cardCategory === category;
      const matchesQuery =
        !q ||
        title.includes(q) ||
        description.includes(q) ||
        cardCategory.toLowerCase().includes(q) ||
        integrations.includes(q);
      card.classList.toggle("hidden", !(matchesCategory && matchesQuery));
    });
  }, [query, category, allCategoryLabel]);

  return (
    <div>
      <div className="mx-auto max-w-md">
        <label htmlFor="template-search" className="sr-only">
          {searchPlaceholder}
        </label>
        <input
          id="template-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="nym-focus w-full rounded-nym border border-marketing-border bg-marketing-surface px-4 py-2.5 text-sm text-marketing-text placeholder:text-marketing-text-muted"
        />
      </div>

      <div
        className="mt-6 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter by category"
      >
        {[allCategoryLabel, ...categories].map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setCategory(chip)}
            className={`nym-focus rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              category === chip
                ? "border-nym-primary/40 bg-nym-primary-50 text-marketing-text"
                : "border-marketing-border text-marketing-text-muted hover:text-marketing-text"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
