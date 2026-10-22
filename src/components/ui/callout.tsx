import { Info } from "lucide-react";
import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Callout({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      className={cn(
        "flex gap-3 rounded-xl border border-border bg-surface-muted/60 px-4 py-3.5 text-sm leading-relaxed text-ink-muted",
        className,
      )}
      {...props}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-crimson" aria-hidden />
      <p>
        <strong className="font-semibold text-ink">Sample data only</strong> — explore without an
        account. Listings and LinkedIn links are for demonstration, not live hiring or verified
        profiles.
      </p>
    </div>
  );
}
