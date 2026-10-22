import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

export function Checkbox({ className, label, id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;
  return (
    <label
      htmlFor={inputId}
      className={cn(
        "inline-flex h-11 cursor-pointer items-center gap-2.5 rounded-[10px] border border-transparent px-2 text-sm text-ink-muted transition-colors hover:text-ink",
        className,
      )}
    >
      <input
        id={inputId}
        type="checkbox"
        className="h-4 w-4 rounded border-border-strong text-crimson focus:ring-crimson/30"
        {...props}
      />
      {label}
    </label>
  );
}
