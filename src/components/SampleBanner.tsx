import { Info } from "lucide-react";

export function SampleBanner() {
  return (
    <div
      className="flex items-start gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink-secondary shadow-card"
      role="status"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-crimson" aria-hidden />
      <p>
        Everything here uses <strong className="font-medium text-ink">sample data</strong> so you
        can explore instantly — no account required. Job and networking links are for illustration
        only.
      </p>
    </div>
  );
}
