import Link from "next/link";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { NodeGraph } from "@/components/NodeGraph";
import { HeroBadge } from "@/components/HeroBadge";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import type { Graph } from "@/data/casestudies";
import { profile } from "@/data/content";

const heroGraph: Graph = {
  caption: "",
  w: 420,
  h: 320,
  nodes: [
    { id: "orch", x: 210, y: 160, label: "Orchestrator", circle: true, variant: "lime" },
    { id: "planner", x: 80, y: 70, label: "Planner", variant: "outline" },
    { id: "retriever", x: 340, y: 70, label: "Retriever", variant: "outline" },
    { id: "critic", x: 80, y: 250, label: "Critic", variant: "outline" },
    { id: "tools", x: 340, y: 250, label: "Tools · MCP", variant: "outline" },
  ],
  edges: [
    { from: "orch", to: "planner" },
    { from: "orch", to: "retriever" },
    { from: "orch", to: "critic" },
    { from: "orch", to: "tools" },
  ],
};

export default function Home() {
  return (
    <Room room="paper">
      {/* Hero */}
      <section className="mx-auto max-w-page px-6 pb-10 pt-6 md:px-10 md:pt-8">
        <p className="label text-xs text-cobalt">{profile.name} · Ahmedabad, India</p>
        <div className="mt-6 grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h1 className="text-d2 font-bold leading-[0.95] tracking-tightest">
              <Rise>I wire AI</Rise>
              <Rise delay={0.07}>
                <span className="box-decoration-clone bg-lime px-2 text-ink dark:bg-lime/25 dark:text-bone">
                  agents
                </span>{" "}
                into
              </Rise>
              <Rise delay={0.14} className="text-cobalt">
                real software.
              </Rise>
            </h1>
            <FadeUp delay={0.28} className="mt-8 max-w-xl">
              <p className="text-lg text-body md:text-xl">
                Senior Full-Stack Engineer and AI Solutions Architect. I build LLM
                agents, RAG and multi-agent systems, and the product around them.
              </p>
            </FadeUp>
            <FadeUp delay={0.38} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="label rounded-full bg-ink px-6 py-3 text-center text-sm text-paper transition-colors hover:bg-cobalt dark:bg-bone dark:text-ink"
              >
                Play with the projects ↓
              </a>
              <Link
                href="/about"
                className="label rounded-full border border-ink/25 px-6 py-3 text-center text-sm transition-colors hover:border-cobalt hover:text-cobalt dark:border-bone/25"
              >
                Who I am
              </Link>
            </FadeUp>
          </div>
          <div className="md:col-span-5">
            <div className="animate-floaty">
              <NodeGraph graph={heroGraph} panel={false} />
            </div>
            <div className="mt-4 flex justify-end pr-2">
              <HeroBadge />
            </div>
          </div>
        </div>
        <p className="mt-10 label text-[10px] text-muted">
          Scroll · four things I built, and you can poke at every one
        </p>
      </section>

      {/* Interactive projects */}
      <ProjectsShowcase />

      {/* Trailers band */}
      <section className="mx-auto max-w-page px-6 py-10 md:px-10">
        <div className="rounded-3xl bg-cobalt px-8 py-14 text-paper md:px-14 md:py-20">
          <p className="label text-[10px] text-lime">Next stop</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold leading-tight tracking-tightest md:text-5xl">
                Those were the trailers. The full stories are in{" "}
                <span className="text-lime">Featured projects.</span>
              </h2>
              <p className="mt-4 text-paper/70">
                Architecture, hard decisions and results for all four.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end -space-y-1">
                {[
                  { n: "Githancer", c: "bg-ink text-paper", r: "-rotate-3" },
                  { n: "Agenthire", c: "bg-lime text-ink", r: "rotate-2" },
                  { n: "Reel Purpose", c: "bg-paper text-ink", r: "-rotate-2" },
                  { n: "AudioDJ Drops", c: "bg-paper text-ink", r: "rotate-3" },
                ].map((chip) => (
                  <span
                    key={chip.n}
                    className={`rounded-md px-3 py-1.5 text-sm font-bold shadow-md ${chip.c} ${chip.r}`}
                  >
                    {chip.n}
                  </span>
                ))}
              </div>
              <Link
                href="/work"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lime text-2xl text-ink transition-transform hover:translate-x-1"
                aria-label="All projects"
              >
                →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OSS note */}
      <section className="mx-auto max-w-page px-6 py-10 md:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-y border-rule py-8">
          <p className="max-w-3xl text-lg">
            Also: I found a cross-tenant data-isolation bug in{" "}
            <a
              href="https://github.com/langchain-ai/deepagentsjs/pull/796"
              target="_blank"
              rel="noreferrer"
              className="text-cobalt underline underline-offset-4"
            >
              langchain-ai/deepagentsjs
            </a>{" "}
            and sent the fix. Maintainers confirmed it upstream.
          </p>
          <span className="label text-xs text-muted">PR #796</span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-page px-6 pb-24 pt-10 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-raised p-8 md:flex-row md:items-center md:p-14">
          <h2 className="text-4xl font-bold tracking-tightest md:text-5xl">
            Building something like this? <span className="text-cobalt dark:text-lime">Let&rsquo;s talk.</span>
          </h2>
          <Link
            href="/contact"
            className="label shrink-0 rounded-full bg-ink px-7 py-4 text-sm text-paper transition-colors hover:bg-cobalt dark:bg-bone dark:text-ink"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </Room>
  );
}
