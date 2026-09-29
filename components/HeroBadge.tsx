// Rotating circular badge for the hero (lime centre + arrow, spinning ring text).
export function HeroBadge() {
  const text = "SENIOR AI ARCHITECT · AVAILABLE 2026 · ";
  return (
    <div className="relative h-32 w-32 shrink-0">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full animate-spin-slow text-current motion-reduce:animate-none"
      >
        <defs>
          <path
            id="hero-ring"
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <text
          className="fill-current"
          style={{ fontSize: "7px", letterSpacing: "0.12em", fontWeight: 700 }}
        >
          <textPath href="#hero-ring" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime text-lg text-ink">
        ↗
      </span>
    </div>
  );
}
