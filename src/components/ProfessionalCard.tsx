import { ExternalLink, MapPin, MessageCircle } from "lucide-react";
import type { Professional } from "@/types";

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-800">
          {professional.label}
        </span>
        <span className="text-xs text-gray-muted">{professional.industry}</span>
      </div>

      <h3 className="font-display text-lg font-bold text-ink">{professional.role}</h3>
      <p className="mt-1 text-sm text-ink-secondary">{professional.companyExample}</p>

      <p className="mt-2 inline-flex items-center gap-1 text-sm text-gray-wsu">
        <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {professional.location}
      </p>

      <p className="mt-4 flex flex-1 gap-2 text-sm leading-relaxed text-ink-secondary">
        <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-crimson" aria-hidden />
        {professional.connectionTip}
      </p>

      <a
        href={professional.linkedInSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark"
      >
        Search on LinkedIn
        <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}
