"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Users } from "lucide-react";

const links = [
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/network", label: "Network", icon: Users },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink focus-ring rounded-sm sm:text-xl"
        >
          Cougar<span className="text-crimson">Jobs</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`focus-ring flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  active
                    ? "bg-crimson text-white"
                    : "text-ink-secondary hover:bg-crimson-soft hover:text-crimson"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {!isHome && (
        <div className="border-t border-border bg-crimson-soft/50 px-4 py-1.5 text-center text-xs text-gray-wsu sm:text-sm">
          Sample listings for demo — not a live job board or verified profiles.
        </div>
      )}
    </header>
  );
}
