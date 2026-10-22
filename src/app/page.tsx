import Link from "next/link";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { HeroPreview } from "@/components/marketing/HeroPreview";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { CardInteractive } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const paths = [
  {
    href: "/jobs",
    title: "Browse Northwest jobs",
    description: "Search Seattle, WA, OR, and ID roles. Filter remote, type, and keywords in one place.",
    icon: Briefcase,
  },
  {
    href: "/network",
    title: "Meet people in your field",
    description: "Pick an industry, get a LinkedIn search, and a short script for reaching out as a Cougar.",
    icon: Users,
  },
];

export default function Home() {
  return (
    <main>
      <Container className="pb-20 pt-10 sm:pt-16 lg:pt-20">
        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-16">
          <div>
            <Badge variant="crimson" className="mb-6 normal-case tracking-normal">
              WSU Cougars · No signup required
            </Badge>

            <h1 className="font-display text-balance text-[2.35rem] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.25rem]">
              Land the role.
              <span className="block text-crimson">Grow the network.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
              CougarJobs is the starting line for Pacific Northwest careers — sample jobs to explore
              and industry paths that open real LinkedIn searches.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/jobs" size="lg" className="w-full sm:w-auto sm:min-w-[168px]">
                Browse jobs
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/network" variant="secondary" size="lg" className="w-full sm:w-auto sm:min-w-[168px]">
                <span className="sm:hidden">Find people</span>
                <span className="hidden sm:inline">Find people to connect with</span>
              </ButtonLink>
            </div>

            <p className="mt-8 text-sm text-ink-faint">
              Pacific Northwest focus · WA, OR, and ID ·{" "}
              <span className="font-medium text-ink-muted">No account required</span>
            </p>
          </div>

          <div className="lg:pt-2">
            <HeroPreview />
          </div>
        </section>

        <section className="mt-24 border-t border-border pt-16 sm:mt-28 sm:pt-20">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">Start here</p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl">
                Two focused experiences
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {paths.map(({ href, title, description, icon: Icon }) => (
              <Link key={href} href={href} className="group block h-full">
                <CardInteractive className="flex h-full flex-col p-6 sm:p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-crimson-muted text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
                    Continue
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </CardInteractive>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12">
          <Callout />
        </div>
      </Container>
    </main>
  );
}
