"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { JobListCard } from "@/components/JobListCard";
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
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">Jobs in the Northwest</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-secondary sm:text-base">
          Sample openings focused on Seattle and nearby states. Use search and filters to narrow
          what you want to explore next.
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <label className="relative block">
          <span className="sr-only">Search jobs</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-muted"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, company, skills…"
            className="focus-ring w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-sm shadow-card placeholder:text-gray-muted"
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex flex-wrap gap-2">
            {jobStates.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => setState(code)}
                className={`focus-ring rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  state === code
                    ? "bg-crimson text-white"
                    : "border border-border bg-surface text-ink-secondary hover:border-crimson/30"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as (typeof jobTypes)[number])}
            className="focus-ring rounded-xl border border-border bg-surface px-3 py-2 text-sm text-ink-secondary"
            aria-label="Job type"
          >
            {jobTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-ink-secondary">
            <input
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => setRemoteOnly(e.target.checked)}
              className="h-4 w-4 rounded border-border text-crimson focus:ring-crimson"
            />
            Remote only
          </label>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-wsu">
        Showing <span className="font-semibold text-ink">{filtered.length}</span> of{" "}
        {jobs.length} sample jobs
      </p>

      <ul className="space-y-3">
        {filtered.map((job) => (
          <li key={job.id}>
            <JobListCard job={job} />
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="rounded-2xl border border-dashed border-border bg-surface py-12 text-center text-sm text-gray-wsu">
          No jobs match your filters. Try clearing search or choosing &ldquo;All nearby.&rdquo;
        </p>
      )}
    </main>
  );
}
