import { MapPin, Wifi } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

/** Decorative static preview — sample content only */
export function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:justify-self-end" aria-hidden>
      <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-crimson/10 via-transparent to-crimson/5 blur-2xl" />
      <Card className="relative overflow-hidden p-0 shadow-card-hover">
        <div className="border-b border-border bg-surface-muted/80 px-5 py-3">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Sample board</p>
            <Badge variant="sample">Demo</Badge>
          </div>
        </div>
        <div className="space-y-0 divide-y divide-border">
          {[
            {
              title: "Software Engineer",
              company: "Microsoft",
              meta: "Redmond, WA · Remote OK",
              remote: true,
            },
            {
              title: "Product Manager Intern",
              company: "Zillow",
              meta: "Seattle, WA · Internship",
              remote: false,
            },
            {
              title: "Data Scientist",
              company: "Amazon",
              meta: "Seattle, WA · Full-time",
              remote: false,
            },
          ].map((row, i) => (
            <div
              key={row.title}
              className={`flex gap-3 px-5 py-4 ${i === 0 ? "bg-surface" : "bg-surface-muted/30"}`}
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-crimson-muted text-xs font-bold text-crimson">
                {row.company.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-bold text-ink">{row.title}</p>
                <p className="text-sm text-crimson">{row.company}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-ink-faint">
                  <MapPin className="h-3 w-3" />
                  {row.meta}
                  {row.remote && <Wifi className="ml-1 h-3 w-3 text-emerald-600" />}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
