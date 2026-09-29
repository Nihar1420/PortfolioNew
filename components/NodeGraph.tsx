"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Graph, GNode } from "@/data/casestudies";
import { cn } from "@/lib/cn";

function nodeById(g: Graph, id: string): GNode {
  return g.nodes.find((n) => n.id === id)!;
}

// panel = diagram sits on a dark ink/raised card (case studies)
// bare  = diagram sits directly on the page background (hero)
function NodePill({ node, panel }: { node: GNode; panel: boolean }) {
  if (node.circle) {
    return (
      <div
        className={cn(
          "flex h-24 w-24 flex-col items-center justify-center rounded-full text-center md:h-28 md:w-28",
          node.variant === "cobalt" ? "bg-cobalt text-paper" : "bg-lime text-ink",
        )}
      >
        <span className="px-2 text-sm font-bold leading-tight">{node.label}</span>
        {node.sub && <span className="label mt-1 text-[9px] opacity-70">{node.sub}</span>}
      </div>
    );
  }

  const base = "whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold";
  let variant: string;
  if (node.variant === "cobalt") {
    variant = "bg-cobalt text-paper";
  } else if (node.variant === "dashed") {
    variant = panel
      ? "border border-dashed border-paper/50 text-paper/80"
      : "border border-dashed border-ink/40 text-ink/70 dark:border-bone/40 dark:text-bone/70";
  } else {
    variant = panel
      ? "border border-paper/70 text-paper"
      : "border border-ink/40 text-ink dark:border-bone/40 dark:text-bone";
  }
  return (
    <div className={cn(base, variant)}>
      {node.label}
      {node.sub && <span className="label ml-1 text-[9px] opacity-60">{node.sub}</span>}
    </div>
  );
}

export function NodeGraph({ graph, panel = true }: { graph: Graph; panel?: boolean }) {
  const reduce = useReducedMotion();
  const { w, h, edges, nodes, caption } = graph;
  const edgeClass = panel ? "stroke-paper/25" : "stroke-ink/20 dark:stroke-bone/25";
  const dotClass = panel ? "fill-lime" : "fill-cobalt";

  const diagram = (
    <div className="overflow-x-auto">
      <div
        className="relative mx-auto"
        style={{ width: "100%", minWidth: panel ? 620 : 280, aspectRatio: `${w} / ${h}` }}
      >
        <svg viewBox={`0 0 ${w} ${h}`} className="absolute inset-0 h-full w-full" aria-hidden>
          {edges.map((e, i) => {
            const a = nodeById(graph, e.from);
            const b = nodeById(graph, e.to);
            return (
              <g key={i}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={edgeClass}
                  strokeWidth={1.5}
                  strokeDasharray="2 7"
                />
                {reduce ? (
                  <circle cx={(a.x + b.x) / 2} cy={(a.y + b.y) / 2} r={4.5} className={dotClass} />
                ) : (
                  <motion.circle
                    r={4.5}
                    className={dotClass}
                    initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                    animate={{ cx: b.x, cy: b.y, opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.8,
                      delay: i * 0.35,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {nodes.map((n) => (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(n.x / w) * 100}%`, top: `${(n.y / h) * 100}%` }}
          >
            <NodePill node={n} panel={panel} />
          </div>
        ))}
      </div>
    </div>
  );

  if (!panel) return diagram;

  return (
    <div className="rounded-3xl bg-ink p-6 dark:bg-raised md:p-8">
      {caption && <p className="label text-xs text-paper/50">{caption}</p>}
      <div className="mt-4">{diagram}</div>
    </div>
  );
}
