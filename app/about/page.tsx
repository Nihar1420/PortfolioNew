import type { Metadata } from "next";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { profile } from "@/data/content";

export const metadata: Metadata = { title: "About" };

const beliefs = [
  {
    n: "01",
    bg: "bg-lime text-ink",
    num: "text-ink",
    title: "The agent is never the whole system.",
    body: "Get the contracts between agents, tools and data right. Prompts are the easy part to change later.",
  },
  {
    n: "02",
    bg: "bg-cobalt text-paper",
    num: "text-lime",
    title: "Own everything around the model.",
    body: "The service it calls, the screen people use, the retry at 3 a.m., the moment it returns nonsense.",
  },
  {
    n: "03",
    bg: "bg-ink text-paper dark:bg-raised",
    num: "text-cobalt",
    title: "Ship it, then make it good.",
    body: "Real users teach faster than whiteboards. Everything on this site is public: live, on npm, or on GitHub.",
  },
];

const offClock = [
  { tint: "bg-rule", rotate: "-rotate-3", caption: "[TODO: caption, e.g. a hobby]" },
  { tint: "bg-cobalt/20", rotate: "rotate-2", caption: "[TODO: caption, e.g. a place]" },
  { tint: "bg-lime/40", rotate: "-rotate-1", caption: "[TODO: caption, e.g. a side interest]" },
];

const reachFor = {
  product: ["Next.js", "TypeScript", "NestJS", ".NET / C#", "Laravel"],
  ai: ["Claude API", "LangGraph", "LangChain", "RAG pipeline", "AutoGen", "CrewAI", "MCP"],
};

const along = [
  { title: "Emerging Team Lead", sub: "Internal recognition" },
  { title: "Best Performer of the Team", sub: "Internal recognition" },
  {
    title: "deepagentsjs · PR #796",
    sub: "Cross-tenant isolation fix, confirmed upstream",
    href: "https://github.com/langchain-ai/deepagentsjs/pull/796",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-1 inline-block whitespace-nowrap rounded-full border border-ink/40 px-3 py-0.5 text-[0.85em] dark:border-bone/40">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <Room room="paper">
      {/* Hero */}
      <section className="mx-auto max-w-page px-6 pb-14 pt-6 md:px-10 md:pt-10">
        <p className="label text-xs text-muted">About</p>
        <div className="mt-6 grid gap-10 md:grid-cols-12 md:items-start">
          <h1 className="text-d2 font-bold tracking-tightest md:col-span-7">
            <Rise>I build the</Rise>
            <Rise delay={0.06}>boring parts</Rise>
            <Rise delay={0.12}>that make AI</Rise>
            <Rise delay={0.18} className="text-cobalt">
              feel like magic.
            </Rise>
          </h1>

          {/* Candid photo card */}
          <div className="md:col-span-5 md:pl-6">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-ink dark:bg-raised">
              {/* TODO(you): drop a candid (not headshot) photo at /public/about-candid.jpg
                  and replace this block with <Image src="/about-candid.jpg" fill ... /> */}
              <div className="flex h-full items-center justify-center p-6 text-center label text-[10px] text-bone/40">
                [TODO: a candid photo of you, not a headshot]
              </div>
              <span className="absolute left-5 top-5 rounded-full bg-cobalt px-3 py-1 label text-[10px] text-paper">
                Ahmedabad, IN
              </span>
              <span className="absolute bottom-5 right-5 rounded-full bg-lime px-3 py-1 label text-[10px] text-ink">
                Open to senior roles
              </span>
              <span className="absolute bottom-5 left-5 flex h-9 w-9 items-center justify-center rounded-full bg-bone text-ink">
                ★
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Short story */}
      <section className="mx-auto max-w-page px-6 py-14 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="label text-xs text-muted md:col-span-3">The short story</p>
          <FadeUp className="md:col-span-9">
            <p className="text-2xl leading-relaxed text-body md:text-3xl">
              For about seven years I&rsquo;ve built for the web: Next.js on the
              front, NestJS and .NET behind it, the odd Laravel app. Then LLMs
              arrived and the interesting problem moved. It stopped being{" "}
              <span className="text-cobalt">can the model do it</span> and became{" "}
              <span className="text-cobalt">what does the system around it look like</span>.
              That&rsquo;s where I live now: agents, retrieval, orchestration, and
              the unglamorous plumbing that keeps them honest. By day I lead a
              small senior team shipping this for enterprise clients in Germany,
              Italy and the UAE. The rest of the time I ship my own things, which
              you&rsquo;ve already seen.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Three things I believe */}
      <section className="mx-auto max-w-page px-6 py-14 md:px-10">
        <h2 className="text-4xl font-bold tracking-tightest md:text-5xl">
          Three things I believe
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {beliefs.map((b, i) => (
            <FadeUp key={b.n} delay={i * 0.06}>
              <div className={`h-full rounded-3xl p-7 ${b.bg}`}>
                <p className={`text-4xl font-bold ${b.num}`}>{b.n}</p>
                <h3 className="mt-4 text-xl font-bold leading-snug">{b.title}</h3>
                <p className="mt-3 text-sm opacity-80">{b.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Off the clock */}
      <section className="mx-auto max-w-page px-6 py-14 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-3">
            <h2 className="text-4xl font-bold tracking-tightest">Off the clock</h2>
            <p className="mt-3 text-sm text-muted">
              The bits that don&rsquo;t fit in a commit message.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:col-span-9 md:justify-end">
            {offClock.map((p, i) => (
              <div
                key={i}
                className={`w-44 rotate-0 bg-bone p-3 pb-8 shadow-lg ${p.rotate}`}
              >
                <div className={`flex aspect-square items-center justify-center ${p.tint} label text-[9px] text-ink/50`}>
                  [TODO: photo]
                </div>
                <p className="mt-3 text-center text-[11px] text-ink/60">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I reach for */}
      <section className="mx-auto max-w-page px-6 py-14 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="label text-xs text-muted md:col-span-3">What I reach for</p>
          <p className="text-xl leading-relaxed md:col-span-9 md:text-2xl">
            On the product side it&rsquo;s usually {reachFor.product.slice(0, 2).map((t) => <Pill key={t}>{t}</Pill>)} and{" "}
            <Pill>{reachFor.product[2]}</Pill>, with <Pill>{reachFor.product[3]}</Pill> or{" "}
            <Pill>{reachFor.product[4]}</Pill> when a client&rsquo;s stack calls for it. On the AI side:{" "}
            {reachFor.ai.slice(0, 3).map((t) => <Pill key={t}>{t}</Pill>)} a good{" "}
            <Pill>{reachFor.ai[3]}</Pill>, <Pill>{reachFor.ai[4]}</Pill> or <Pill>{reachFor.ai[5]}</Pill>{" "}
            for multi-agent work, and <Pill>{reachFor.ai[6]}</Pill> to wire in tools.
          </p>
        </div>
      </section>

      {/* Along the way */}
      <section className="mx-auto max-w-page px-6 pb-20 pt-10 md:px-10">
        <p className="label mb-4 text-xs text-muted">Along the way</p>
        <div className="grid grid-cols-1 border-t border-rule md:grid-cols-3">
          {along.map((a, i) => {
            const inner = (
              <>
                <p className="font-bold">
                  {a.title} {a.href && <span className="text-cobalt">&#8599;</span>}
                </p>
                <p className="mt-1 text-sm text-muted">{a.sub}</p>
              </>
            );
            const cls = `border-b border-rule py-6 md:border-b-0 md:py-8 ${i < along.length - 1 ? "md:border-r md:pr-6" : ""} ${i > 0 ? "md:pl-6" : ""}`;
            return a.href ? (
              <a key={i} href={a.href} target="_blank" rel="noreferrer" className={`${cls} block transition-colors hover:text-cobalt`}>
                {inner}
              </a>
            ) : (
              <div key={i} className={cls}>{inner}</div>
            );
          })}
        </div>
      </section>
    </Room>
  );
}
