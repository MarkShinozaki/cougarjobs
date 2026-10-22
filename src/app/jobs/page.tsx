"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { JobListCard } from "@/components/JobListCard";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";
import { Select } from "@/components/ui/select";
import { Callout } from "@/components/ui/callout";
import { jobs, jobStates } from "@/lib/data";
import type { JobStateFilter } from "@/types";

const jobTypes = ["All types", "Full-time", "Internship", "Part-time", "Contract"] as const;

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<JobStateFilter>("all");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [typeFilter, setTypeFilter] = useState<(typeof jobTypes)[number]>("All types");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (state !== "all" && job.state !== state) return false;
      if (remoteOnly && !job.remote) return false;
      if (typeFilter !== "All types" && job.type !== typeFilter) return false;
      if (!q) return true;
      const haystack = [job.title, job.company, job.location, job.description, ...job.requirements]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, state, remoteOnly, typeFilter]);

  return (
    <main>
      <Container className="pb-20 pt-8 sm:pt-10">
        <PageHeader
          eyebrow="Jobs"
          title="Northwest openings"
          description="Sample roles across Seattle and nearby states. Search and filter to shape your short list — then research companies and apply on your timeline."
        />

        <Callout className="mb-8" />

        <Card className="mb-8 p-4 sm:p-5">
          <div className="space-y-4">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
                aria-hidden
              />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, company, or skills…"
                aria-label="Search jobs"
                inputClassName="pl-10"
              />
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
                {jobStates.map(({ code, label }) => (
                  <Chip key={code} selected={state === code} onClick={() => setState(code)}>
                    {label}
                  </Chip>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value as (typeof jobTypes)[number])}
                  aria-label="Job type"
                  className="w-full sm:w-auto sm:min-w-[160px]"
                >
                  {jobTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </Select>
                <Checkbox
                  label="Remote only"
                  checked={remoteOnly}
                  onChange={(e) => setRemoteOnly(e.target.checked)}
                />
              </div>
            </div>
          </div>
        </Card>

        <p className="mb-5 text-sm text-ink-muted">
          <span className="font-semibold tabular-nums text-ink">{filtered.length}</span> of{" "}
          <span className="tabular-nums">{jobs.length}</span> sample listings
        </p>

        <ul className="space-y-3">
          {filtered.map((job) => (
            <li key={job.id}>
              <JobListCard job={job} />
            </li>
          ))}
        </ul>

        {filtered.length === 0 && (
          <Card className="py-16 text-center">
            <p className="font-display text-lg font-semibold text-ink">No matches</p>
            <p className="mt-2 text-sm text-ink-muted">
              Try clearing search or selecting &ldquo;All nearby.&rdquo;
            </p>
          </Card>
        )}
      </Container>
    </main>
  );
}
