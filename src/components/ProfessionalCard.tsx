import { ExternalLink, MapPin, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Professional } from "@/types";

interface ProfessionalCardProps {
  professional: Professional;
}

export function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <Card className="relative flex h-full flex-col overflow-hidden p-0 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
      <div className="h-1 bg-gradient-to-r from-crimson via-crimson/80 to-crimson/40" aria-hidden />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <Badge variant="sample" className="normal-case tracking-normal">
            {professional.label}
          </Badge>
          <span className="text-right text-xs font-medium text-ink-faint">{professional.industry}</span>
        </div>

        <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{professional.role}</h3>
        <p className="mt-1 text-sm text-ink-muted">{professional.companyExample}</p>

        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-muted">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-ink-faint" aria-hidden />
          {professional.location}
        </p>

        <div className="mt-5 flex flex-1 gap-3 rounded-xl border border-border bg-surface-muted/50 p-4">
          <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-crimson" aria-hidden />
          <p className="text-sm leading-relaxed text-ink-muted">{professional.connectionTip}</p>
        </div>

        <ButtonLink
          href={professional.linkedInSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full"
        >
          Search on LinkedIn
          <ExternalLink className="h-4 w-4" aria-hidden />
        </ButtonLink>
      </div>
    </Card>
  );
}
