"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-nym-lg border border-marketing-border/80 bg-marketing-surface/40 backdrop-blur-sm"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                className="nym-focus flex w-full items-center justify-between px-5 py-4 text-left text-base font-medium text-marketing-text transition-colors hover:bg-nym-primary-50"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className={`shrink-0 text-marketing-text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-base leading-relaxed text-marketing-text-muted"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
