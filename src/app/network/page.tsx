"use client";

import { useMemo, useState } from "react";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { Callout } from "@/components/ui/callout";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { industries, professionals } from "@/lib/data";

export default function NetworkPage() {
  const [industry, setIndustry] = useState<string>("All industries");

  const filtered = useMemo(() => {
    if (industry === "All industries") return professionals;
    return professionals.filter((p) => p.industry === industry);
  }, [industry]);

  return (
    <main>
      <Container className="pb-20 pt-8 sm:pt-10">
        <PageHeader
          eyebrow="Network"
          title="Connect with your industry"
          description="Each card opens a LinkedIn people search tailored to a role and region — plus a concise note you can adapt when you reach out."
        />

        <Callout className="mb-8" />

        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
            Filter by industry
          </p>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
            <Chip
              selected={industry === "All industries"}
              onClick={() => setIndustry("All industries")}
            >
              All
            </Chip>
            {industries.map((name) => (
              <Chip key={name} selected={industry === name} onClick={() => setIndustry(name)}>
                {name}
              </Chip>
            ))}
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {filtered.map((professional) => (
            <li key={professional.id} className="min-h-0">
              <ProfessionalCard professional={professional} />
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-border-strong bg-surface py-16 text-center text-sm text-ink-muted">
            No sample searches for this industry yet.
          </p>
        )}
      </Container>
    </main>
  );
}
