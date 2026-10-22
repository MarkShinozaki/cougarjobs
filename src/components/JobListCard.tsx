"use client";

import { useState } from "react";
import { Building2, ChevronDown, MapPin, Wifi } from "lucide-react";
import type { Job } from "@/types";

interface JobListCardProps {
  job: Job;
}

export function JobListCard({ job }: JobListCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-2xl border border-border bg-surface shadow-card transition-shadow hover:shadow-card-hover">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring flex w-full flex-col gap-3 p-4 text-left sm:flex-row sm:items-center sm:justify-between sm:p-5"
        aria-expanded={open}
      >
        <div className="flex min-w-0 flex-1 gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-crimson-soft text-crimson">
            <Building2 className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-base font-bold text-ink sm:text-lg">{job.title}</h3>
            <p className="text-sm font-medium text-crimson">{job.company}</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-wsu sm:text-sm">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {job.location}
              </span>
              {job.remote && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                  <Wifi className="h-3 w-3" aria-hidden />
                  Remote OK
                </span>
              )}
              <span>{job.type}</span>
              <span className="hidden sm:inline">{job.salary}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 sm:flex-col sm:items-end">
          <span className="text-xs text-gray-muted sm:text-sm">{job.posted}</span>
          <ChevronDown
            className={`h-5 w-5 text-gray-muted transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-border px-4 pb-5 pt-2 sm:px-5">
          <p className="mb-3 text-sm leading-relaxed text-ink-secondary">{job.description}</p>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-muted">
            Highlights
          </p>
          <ul className="flex flex-wrap gap-2">
            {job.requirements.map((req) => (
              <li
                key={req}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-ink-secondary"
              >
                {req}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-gray-muted sm:hidden">{job.salary}</p>
        </div>
      )}
    </article>
  );
}
