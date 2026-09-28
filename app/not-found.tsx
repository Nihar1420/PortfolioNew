import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-page flex-col items-center justify-center px-6 py-32 text-center md:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
        404
      </p>
      <h1 className="mt-6 font-display text-5xl text-ink md:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-ink-muted">
        That page has wandered off. Let&rsquo;s get you back to solid ground.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-cobalt px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-ink"
      >
        Back home
      </Link>
    </section>
  );
}
