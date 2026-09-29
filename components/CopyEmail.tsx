"use client";

import { useState } from "react";
import { profile } from "@/data/content";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(profile.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {}
      }}
      className="label rounded-full border border-rule px-5 py-2.5 text-xs transition-colors hover:border-cobalt dark:border-bone/25"
    >
      {copied ? "Copied ✓" : "⧉ Copy email"}
    </button>
  );
}
