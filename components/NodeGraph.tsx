"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Graph, GNode } from "@/data/casestudies";
import { cn } from "@/lib/cn";

function nodeById(g: Graph, id: string): GNode {
  return g.nodes.find((n) => n.id === id)!;
}

function NodePill({ node }: { node: GNode }) {
  if (node.circle) {
    return (
      <div
        className={cn(
          "flex h-28 w-28 flex-col items-center justify-center rounded-full text-center md:h-32 md:w-32",
          node.variant === "cobalt" ? "bg-cobalt text-paper" : "bg-lime text-ink",
        )}
      >
        <span className="px-2 text-sm font-bold leading-tight">{node.label}</span>
        {node.sub && <span className="label mt-1 text-[9px] opacity-70">{node.sub}</span>}
      </div>
    );
  }
  const base = "whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold";
  const variant =
    node.variant === "cobalt"
      ? "bg-cobalt text-paper"
      : node.variant === "dashed"
        ? "border border-dashed border-paper/50 text-paper/80"
        : "border border-paper/70 bg-ink text-paper";
  return (
    <div className={cn(base, variant)}>
      {node.label}
      {node.sub && <span className="label ml-1 text-[9px] opacity-60">{node.sub}</span>}
    </div>
  );
}

export function NodeGraph({ graph }: { graph: Graph }) {
  const reduce = useReducedMotion();
  const { w, h, edges, nodes, caption } = graph;

  return (
    <div className="rounded-3xl bg-ink p-6 md:p-8">
      <p className="label text-xs text-paper/50">{caption}</p>
      <div className="mt-4 overflow-x-auto">
        <div className="relative mx-auto" style={{ width: "100%", minWidth: 620, aspectRatio: `${w} / ${h}` }}>
          {/* edges + travelling signals */}
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
                    stroke="#f4f3ee"
                    strokeOpacity={0.25}
                    strokeWidth={1.5}
                    strokeDasharray="2 7"
                  />
                  {reduce ? (
                    <circle cx={(a.x + b.x) / 2} cy={(a.y + b.y) / 2} r={5} fill="#d4f24a" />
                  ) : (
                    <motion.circle
                      r={5.5}
                      fill="#d4f24a"
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

          {/* nodes */}
          {nodes.map((n) => (
            <div
              key={n.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(n.x / w) * 100}%`, top: `${(n.y / h) * 100}%` }}
            >
              <NodePill node={n} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
