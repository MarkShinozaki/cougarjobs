"use client";

import { useState } from "react";
import { Building2, ChevronDown, MapPin, Wifi } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CardInteractive } from "@/components/ui/card";
import { cn } from "@/lib/cn";
import type { Job } from "@/types";

interface JobListCardProps {
  job: Job;
}

export function JobListCard({ job }: JobListCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <CardInteractive className="overflow-hidden p-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-col gap-4 p-5 text-left transition-colors hover:bg-surface-muted/40 sm:flex-row sm:items-center sm:justify-between sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-crimson/25"
        aria-expanded={open}
      >
        <div className="flex min-w-0 flex-1 gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-crimson-muted text-crimson">
            <Building2 className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-ink">{job.title}</h3>
            <p className="mt-0.5 text-sm font-semibold text-crimson">{job.company}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-ink-faint" aria-hidden />
                {job.location}
              </span>
              <span className="text-ink-faint">·</span>
              <span>{job.type}</span>
              {job.remote && (
                <Badge variant="success" className="normal-case tracking-normal">
                  <Wifi className="mr-1 inline h-3 w-3" aria-hidden />
                  Remote
                </Badge>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center">
          <span className="text-sm font-medium tabular-nums text-ink-muted">{job.posted}</span>
          <span className="hidden text-sm font-medium text-ink sm:block">{job.salary}</span>
          <ChevronDown
            className={cn("h-5 w-5 text-ink-faint transition-transform duration-200", open && "rotate-180")}
            aria-hidden
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-border bg-surface-muted/30 px-5 pb-6 pt-4 sm:px-6">
          <p className="text-[15px] leading-relaxed text-ink-muted">{job.description}</p>
          <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
            Highlights
          </p>
          <ul className="flex flex-wrap gap-2">
            {job.requirements.map((req) => (
              <li
                key={req}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {req}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-ink sm:hidden">{job.salary}</p>
        </div>
      )}
    </CardInteractive>
  );
}
