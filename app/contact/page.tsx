import type { Metadata } from "next";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { LocalClock } from "@/components/LocalClock";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { profile } from "@/data/content";

export const metadata: Metadata = { title: "Contact" };

const tiers = [
  {
    label: "By the hour",
    icon: "◷",
    title: "Freelance",
    desc: "Focused work with a clear edge: a feature, an integration, an AI prototype, or a code and architecture review.",
    bullets: ["Billed hourly", "Flexible start", "Great for audits and prototypes"],
  },
  {
    label: "By the month",
    icon: "▦",
    title: "Retainer",
    desc: "A dedicated block of my time every month, for teams that need an ongoing AI and full-stack engineer without a full hire.",
    bullets: ["Fixed monthly capacity", "Part-time or full-time hours", "Ongoing delivery and support"],
  },
  {
    label: "On your team",
    icon: "☺",
    title: "Full-time",
    desc: "Join as a dedicated senior IC or architect and own the AI-native product with your team, long term.",
    bullets: ["Senior IC or architect", "Dedicated, long term", "Leads and mentors when needed"],
  },
];

const looking = [
  { k: "Full-time", v: "Senior IC or architect on an AI-native product" },
  { k: "Freelance", v: "Hourly or monthly · AI features, agents, full-stack builds" },
  { k: "Based in", v: "Ahmedabad, India · [TODO: remote / hybrid / open to relocation]" },
];

const elsewhere = [
  { label: "LinkedIn", href: profile.linkedin, sub: "in/nihar-ranjan-hota · career and roles" },
  { label: "GitHub", href: profile.github, sub: "Nihar1420 · code and open source" },
  { label: "npm", href: "https://www.npmjs.com/package/githancer-cli", sub: "githancer-cli · published package" },
];

export default function ContactPage() {
  return (
    <Room room="paper">
      {/* Hero + clock */}
      <section className="relative mx-auto max-w-page overflow-hidden px-6 pb-10 pt-6 md:px-10 md:pt-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-cobalt/90"
        />
        <div className="relative z-10 grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <p className="label text-xs text-muted">Contact</p>
            <h1 className="mt-6 text-d2 font-bold tracking-tightest">
              <Rise>Let&rsquo;s build the</Rise>
              <Rise delay={0.08} className="text-lime">
                agentic thing.
              </Rise>
            </h1>
            <p className="mt-6 max-w-md text-lg text-body">
              Hire me by the hour, on a monthly retainer, or full-time on your
              team. Tell me what you&rsquo;re building.
            </p>
          </div>
          <div className="md:col-span-5 md:pt-6">
            <LocalClock />
          </div>
        </div>
      </section>

      {/* Ways to work */}
      <section className="mx-auto max-w-page px-6 py-14 md:px-10">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-4xl font-bold tracking-tightest md:text-5xl">
            Ways to work with me
          </h2>
          <p className="label text-[10px] text-muted">Pick one · it fills in the form below</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <FadeUp key={t.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-rule p-6 dark:border-bone/15">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt text-paper">
                    {t.icon}
                  </span>
                  <span className="label text-[10px] text-muted">{t.label}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tightest">{t.title}</h3>
                <p className="mt-3 text-sm text-body">{t.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quick-message"
                  className="label mt-6 rounded-full border border-current/40 py-3 text-center text-xs transition-colors hover:border-cobalt hover:text-accent"
                >
                  Pick this
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Rates depend on scope. [TODO: add an hourly or monthly starting rate, or keep &ldquo;on request&rdquo;]
        </p>
      </section>

      {/* Direct + form */}
      <section id="quick-message" className="mx-auto max-w-page px-6 py-14 md:px-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="label text-xs text-muted">Write to me directly</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block break-all text-3xl font-bold tracking-tightest underline decoration-lime decoration-4 underline-offset-8 md:text-4xl"
            >
              {profile.email}
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <CopyEmail />
              <a
                href={`mailto:${profile.email}`}
                className="label rounded-full bg-ink px-5 py-2.5 text-xs text-paper transition-colors hover:bg-cobalt dark:bg-bone dark:text-ink"
              >
                Open mail app &#8599;
              </a>
            </div>

            <p className="label mt-10 text-xs text-muted">What I&rsquo;m looking for</p>
            <dl className="mt-4 divide-y divide-rule border-y border-rule">
              {looking.map((l) => (
                <div key={l.k} className="grid grid-cols-1 gap-1 py-4 md:grid-cols-4">
                  <dt className="label text-[10px] text-accent md:col-span-1">{l.k}</dt>
                  <dd className="text-body md:col-span-3">{l.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Find me elsewhere */}
      <section className="mx-auto max-w-page px-6 pb-20 pt-8 md:px-10">
        <p className="label mb-4 text-xs text-muted">Find me elsewhere</p>
        <div className="grid gap-4 md:grid-cols-3">
          {elsewhere.map((e) => (
            <a
              key={e.label}
              href={e.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col justify-between rounded-3xl border border-rule p-6 transition-colors hover:border-cobalt dark:border-bone/15"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold tracking-tightest">{e.label}</span>
                <span className="text-xl text-muted transition-colors group-hover:text-accent">&#8599;</span>
              </div>
              <p className="mt-10 text-sm text-muted">{e.sub}</p>
            </a>
          ))}
        </div>
      </section>
    </Room>
  );
}
