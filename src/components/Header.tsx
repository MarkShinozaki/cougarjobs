"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

const links = [
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/network", label: "Network", icon: Users },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/75 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-[60px] items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson/40 focus-visible:ring-offset-2 focus-visible:ring-offset-page"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-crimson text-sm font-bold text-white shadow-button">
            C
          </span>
          <span className="font-display text-lg font-bold tracking-[-0.02em] text-ink">
            Cougar<span className="text-crimson">Jobs</span>
          </span>
        </Link>

        <nav
          className="flex items-center rounded-full border border-border bg-surface-muted/90 p-1 shadow-xs"
          aria-label="Main"
        >
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex h-9 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson/40 focus-visible:ring-offset-2 focus-visible:ring-offset-page",
                  active
                    ? "bg-surface text-ink shadow-sm"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                <Icon className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
