import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, inputClassName, ...props },
  ref,
) {
  return (
    <div className={cn("relative", className)}>
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-[10px] border border-border-strong bg-surface px-4 text-sm text-ink shadow-xs",
          "placeholder:text-ink-faint transition-[border-color,box-shadow] duration-200",
          "hover:border-border hover:shadow-sm",
          "focus-visible:outline-none focus-visible:border-crimson/40 focus-visible:ring-2 focus-visible:ring-crimson/15",
          inputClassName,
        )}
        {...props}
      />
    </div>
  );
});
