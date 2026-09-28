import type { Metadata } from "next";
import { Room } from "@/components/Room";
import { Rise, FadeUp } from "@/components/Rise";
import { profile } from "@/data/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Room room="ink">
      <section className="relative mx-auto max-w-page overflow-hidden px-6 py-20 md:px-10 md:py-28">
        {/* cobalt semicircle */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -right-24 h-[26rem] w-[26rem] rounded-full bg-cobalt md:h-[36rem] md:w-[36rem]"
        />
        <div className="relative z-10">
          <p className="label text-xs text-paper/60">
            Open to senior IC and architect roles · AI-native products
          </p>
          <h1 className="mt-8 text-d1 font-bold tracking-tightest">
            <Rise>Let&rsquo;s build the</Rise>
            <Rise delay={0.08} className="text-lime">
              agentic thing.
            </Rise>
          </h1>
          <FadeUp delay={0.25} className="mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block break-all text-2xl text-lime underline decoration-2 underline-offset-8 transition-all hover:decoration-4 md:text-4xl"
            >
              {profile.email}
            </a>
          </FadeUp>
          <FadeUp delay={0.35} className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="label rounded-full border border-paper/30 px-5 py-2 text-sm transition-colors hover:border-paper"
            >
              LinkedIn &#8599;
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="label rounded-full border border-paper/30 px-5 py-2 text-sm transition-colors hover:border-paper"
            >
              GitHub &#8599;
            </a>
          </FadeUp>
        </div>
      </section>
    </Room>
  );
}
