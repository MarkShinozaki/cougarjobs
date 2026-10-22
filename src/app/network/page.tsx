"use client";

import { useMemo, useState } from "react";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { industries, professionals } from "@/lib/data";

export default function NetworkPage() {
  const [industry, setIndustry] = useState<string>("All industries");

  const filtered = useMemo(() => {
    if (industry === "All industries") return professionals;
    return professionals.filter((p) => p.industry === industry);
  }, [industry]);

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Connect with your industry
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-secondary sm:text-base">
          Choose a field that matches your goals. Each card opens a{" "}
          <strong className="font-medium text-ink">LinkedIn people search</strong> — we don&apos;t
          list real individuals here.
        </p>
      </div>

      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-muted">
          Industry
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setIndustry("All industries")}
            className={`focus-ring rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              industry === "All industries"
                ? "bg-crimson text-white"
                : "border border-border bg-surface text-ink-secondary hover:border-crimson/30"
            }`}
          >
            All industries
          </button>
          {industries.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setIndustry(name)}
              className={`focus-ring rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                industry === name
                  ? "bg-crimson text-white"
                  : "border border-border bg-surface text-ink-secondary hover:border-crimson/30"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:gap-6">
        {filtered.map((professional) => (
          <li key={professional.id} className="min-h-0">
            <ProfessionalCard professional={professional} />
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-border py-12 text-center text-sm text-gray-wsu">
          No sample searches for this industry yet.
        </p>
      )}
    </main>
  );
}
