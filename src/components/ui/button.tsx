import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-[color,background,box-shadow,transform,border-color] duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson/40 focus-visible:ring-offset-2 focus-visible:ring-offset-page disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

const variants = {
  primary:
    "bg-crimson text-white shadow-button hover:bg-crimson-hover hover:shadow-button-hover border border-crimson-dark/20",
  secondary:
    "bg-surface text-ink border border-border-strong shadow-xs hover:bg-surface-muted hover:border-border hover:shadow-sm",
  ghost: "text-ink-muted hover:text-ink hover:bg-surface-muted/80",
  outline:
    "border border-border-strong bg-transparent text-ink hover:bg-surface hover:shadow-xs",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-sm rounded-lg",
  md: "h-11 px-5 text-sm rounded-[10px]",
  lg: "h-12 px-6 text-[15px] rounded-[10px] sm:px-7",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});

type ButtonLinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
