import { about } from "@/data/content";

// Brutalist bordered stat band for the About page (~7 / DE·IT·AE / awards).
export function StatBand() {
  return (
    <div className="grid grid-cols-1 border-y border-ink/80 md:grid-cols-3">
      {about.stats.map((s, i) => (
        <div
          key={i}
          className={
            "px-2 py-8 md:px-6" +
            (i < about.stats.length - 1 ? " border-b border-ink/30 md:border-b-0 md:border-r" : "")
          }
        >
          <p className="text-4xl font-bold leading-none tracking-tightest md:text-5xl">
            {s.big}
          </p>
          <p className="label mt-3 text-xs opacity-70">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
