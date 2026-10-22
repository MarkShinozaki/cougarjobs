import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
  actions?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, className, actions }: PageHeaderProps) {
  return (
    <header className={cn("mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-[17px]">{description}</p>
        )}
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </header>
  );
}
