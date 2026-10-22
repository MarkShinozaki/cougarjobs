import Link from "next/link";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { SampleBanner } from "@/components/SampleBanner";

const paths = [
  {
    href: "/jobs",
    title: "Browse jobs",
    description:
      "Search roles in Seattle, Washington, Oregon, Idaho, and nearby — filter by remote, type, and keyword.",
    icon: Briefcase,
    cta: "Open job board",
  },
  {
    href: "/network",
    title: "Find your people",
    description:
      "Pick an industry you relate to and jump to LinkedIn people search — with tips for reaching out as a Cougar.",
    icon: Users,
    cta: "Explore industries",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-10 shadow-card sm:px-10 sm:py-14">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crimson/5"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-crimson/5"
          aria-hidden
        />

        <p className="mb-3 inline-flex items-center rounded-full bg-crimson-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-crimson">
          For WSU Cougars · No signup
        </p>

        <h1 className="font-display max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
          Jobs near Seattle.
          <span className="text-crimson"> People worth knowing.</span>
        </h1>

        <p className="mt-4 max-w-lg text-base text-ink-secondary sm:text-lg">
          Two steps: find openings in the Northwest, then connect with professionals in fields you
          care about — starting on LinkedIn.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/jobs"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark"
          >
            Browse jobs
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/network"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-crimson/30 hover:bg-crimson-soft/50"
          >
            Find people to connect with
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {paths.map(({ href, title, description, icon: Icon, cta }) => (
          <Link
            key={href}
            href={href}
            className="focus-ring group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:border-crimson/20 hover:shadow-card-hover"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-crimson-soft text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
              <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-secondary">{description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-crimson">
              {cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
        ))}
      </section>

      <div className="mt-10">
        <SampleBanner />
      </div>
    </main>
  );
}
