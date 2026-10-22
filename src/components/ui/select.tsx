import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  function Select({ className, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={cn(
          "h-11 cursor-pointer rounded-[10px] border border-border-strong bg-surface px-3.5 pr-9 text-sm text-ink shadow-xs",
          "transition-[border-color,box-shadow] hover:border-border hover:shadow-sm",
          "focus-visible:outline-none focus-visible:border-crimson/40 focus-visible:ring-2 focus-visible:ring-crimson/15",
          className,
        )}
        {...props}
      />
    );
  },
);
