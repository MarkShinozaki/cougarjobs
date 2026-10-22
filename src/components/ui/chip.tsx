import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export function Chip({ className, selected, type = "button", ...props }: ChipProps) {
  return (
    <button
      type={type}
      className={cn(
        "h-9 shrink-0 rounded-full px-4 text-sm font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson/30 focus-visible:ring-offset-2 focus-visible:ring-offset-page",
        selected
          ? "border border-ink bg-ink text-surface shadow-sm"
          : "border border-border bg-surface text-ink-muted hover:border-border-strong hover:bg-surface-muted hover:text-ink",
        className,
      )}
      aria-pressed={selected}
      {...props}
    />
  );
}
