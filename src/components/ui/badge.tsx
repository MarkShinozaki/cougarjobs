import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

const variants = {
  default: "bg-surface-muted text-ink-muted border-border",
  crimson: "bg-crimson-muted text-crimson border-crimson/10",
  sample: "bg-amber-50 text-amber-900/90 border-amber-200/80",
  success: "bg-emerald-50 text-emerald-800 border-emerald-200/70",
} as const;

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof variants;
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
