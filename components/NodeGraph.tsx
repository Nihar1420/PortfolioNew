"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Graph, GNode } from "@/data/casestudies";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

function nodeById(g: Graph, id: string): GNode {
  return g.nodes.find((n) => n.id === id)!;
}

function NodePill({ node, tone }: { node: GNode; tone: Tone }) {
  if (node.circle) {
    return (
      <div
        className={cn(
          "flex h-24 w-24 flex-col items-center justify-center rounded-full text-center md:h-32 md:w-32",
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
  if (node.variant === "cobalt") variant = "bg-cobalt text-paper";
  else if (node.variant === "dashed")
    variant =
      tone === "dark"
        ? "border border-dashed border-paper/50 text-paper/80"
        : "border border-dashed border-ink/40 text-ink/70";
  else
    variant =
      tone === "dark"
        ? "border border-paper/70 bg-ink text-paper"
        : "border border-ink/50 bg-paper text-ink";

  return (
    <div className={cn(base, variant)}>
      {node.label}
      {node.sub && <span className="label ml-1 text-[9px] opacity-60">{node.sub}</span>}
    </div>
  );
}

export function NodeGraph({
  graph,
  tone = "dark",
  panel = true,
}: {
  graph: Graph;
  tone?: Tone;
  panel?: boolean;
}) {
  const reduce = useReducedMotion();
  const { w, h, edges, nodes, caption } = graph;
  const edgeStroke = tone === "dark" ? "#f4f3ee" : "#111111";
  const dotFill = tone === "dark" ? "#d4f24a" : "#1b3fd6";

  const diagram = (
    <div className="overflow-x-auto">
      <div
        className="relative mx-auto"
        style={{ width: "100%", minWidth: panel ? 620 : 300, aspectRatio: `${w} / ${h}` }}
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
                  stroke={edgeStroke}
                  strokeOpacity={0.25}
                  strokeWidth={1.5}
                  strokeDasharray="2 7"
                />
                {reduce ? (
                  <circle cx={(a.x + b.x) / 2} cy={(a.y + b.y) / 2} r={5} fill={dotFill} />
                ) : (
                  <motion.circle
                    r={5.5}
                    fill={dotFill}
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
            <NodePill node={n} tone={tone} />
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
