import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { NodeGraph } from "@/components/NodeGraph";
import { caseStudies, caseStudyBySlug } from "@/data/casestudies";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudyBySlug(params.slug);
  return { title: cs ? cs.title : "Work" };
}

const shotClass: Record<string, string> = {
  ink: "bg-ink text-paper/50",
  cobalt: "bg-cobalt text-paper/70",
  lime: "bg-lime text-ink/50",
  gray: "bg-rule text-ink/50",
};

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudyBySlug(params.slug);
  if (!cs) notFound();

  return (
    <Room room="paper">
      <article className="mx-auto max-w-page px-6 md:px-10">
        {/* Back link */}
        <Link href="/work" className="label inline-block pt-2 text-xs text-muted hover:text-accent">
          &larr; All work · {String(cs.index).padStart(2, "0")} of 04
        </Link>

        {/* Title */}
        <h1 className="mt-6 text-d1 font-bold tracking-tightest">
          <Rise>{cs.title}</Rise>
        </h1>

        {/* Lede + meta */}
        <div className="mt-8 grid gap-10 md:grid-cols-12">
          <FadeUp className="md:col-span-6">
            <p className="text-xl leading-snug text-body md:text-2xl">{cs.lede}</p>
          </FadeUp>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:col-span-6">
            {[
              { label: "Role", value: cs.role },
              { label: cs.statusLabel, value: cs.statusValue },
              { label: "Stack", value: cs.stack },
              { label: "Links", value: null },
            ].map((m, i) => (
              <div key={i} className="border-t border-ink/70 dark:border-bone/40 pt-3">
                <p className="label text-[10px] text-muted">{m.label}</p>
                {m.value ? (
                  <p className="mt-1 font-bold">{m.value}</p>
                ) : (
                  <p className="mt-1 flex flex-wrap gap-3">
                    {cs.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-accent hover:underline"
                      >
                        {l.label} &#8599;
                      </a>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="mt-14">
          <NodeGraph graph={cs.graph} />
        </div>

        {/* Problem + decision */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <FadeUp>
            <p className="label text-xs text-accent">The problem</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tightest md:text-4xl">
              {cs.problem.heading}
            </h2>
            <p className="mt-5 text-body">{cs.problem.body}</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="label text-xs text-accent">The hard decision</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tightest md:text-4xl">
              {cs.decision.heading}
            </h2>
            <p className="mt-5 text-body">{cs.decision.body}</p>
          </FadeUp>
        </div>

        {/* Stat band */}
        <div className="mt-16 grid grid-cols-1 border-y border-ink/70 dark:border-bone/40 md:grid-cols-3">
          {cs.stats.map((s, i) => (
            <div
              key={i}
              className={cn(
                "px-2 py-8 md:px-6",
                i < cs.stats.length - 1 && "border-b border-ink/25 dark:border-bone/20 md:border-b-0 md:border-r",
              )}
            >
              <p className="text-4xl font-bold leading-none tracking-tightest md:text-5xl">
                {s.big}
              </p>
              <p className="label mt-3 text-[10px] opacity-70">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Screenshots */}
        <div className="mb-24 mt-16 grid auto-rows-[minmax(0,1fr)] gap-4 md:grid-cols-3">
          {cs.shots.map((s, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center justify-center rounded-2xl p-6 text-center",
                shotClass[s.variant],
                s.big ? "min-h-[300px] md:col-span-2 md:row-span-2 md:min-h-[480px]" : "min-h-[200px]",
              )}
            >
              <span className="label text-xs">[ Screenshot: {s.label} ]</span>
            </div>
          ))}
        </div>
      </article>
    </Room>
  );
}
