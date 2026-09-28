import type { Metadata } from "next";
import { AvailableBadge } from "@/components/AvailableBadge";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about senior IC and architect roles on AI-native products.",
};

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "in/nihar-ranjan-hota", href: profile.linkedin },
  { label: "GitHub", value: "Nihar1420", href: profile.github },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-page px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 md:grid-cols-12 md:items-start">
        <div className="md:col-span-8">
          <p className="eyebrow mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
            Contact
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-7xl">
            Let&rsquo;s build something{" "}
            <span className="text-cobalt">worth shipping</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink-muted">
            {profile.lookingFor} The fastest way to reach me is email, and I read
            every message.
          </p>

          <ul className="mt-12 divide-y divide-paper-300 border-y border-paper-300">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-baseline justify-between py-6"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">
                    {l.label}
                  </span>
                  <span className="font-display text-2xl text-ink transition-colors group-hover:text-cobalt md:text-3xl">
                    {l.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center md:col-span-4 md:justify-end">
          <AvailableBadge size={150} />
        </div>
      </div>
    </section>
  );
}
