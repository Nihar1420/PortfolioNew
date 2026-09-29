"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

// Sends to your inbox via Web3Forms (free, no backend).
// Set NEXT_PUBLIC_WEB3FORMS_KEY in the environment (Vercel) to your access key
// from web3forms.com. Until then, the form falls back to opening the mail app.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const TO_EMAIL = "niharranjanhota864@gmail.com";
const TOPICS = ["Hourly freelance", "Monthly retainer", "Full-time role", "Just saying hi"];

export function ContactForm({ topic: initialTopic = "" }: { topic?: string }) {
  const [topic, setTopic] = useState(initialTopic);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!ACCESS_KEY) {
      // Fallback: open the user's mail client.
      const body = `From: ${name} (${email})\nAbout: ${topic}\n\n${message}`;
      window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
        "Portfolio message" + (topic ? ` · ${topic}` : ""),
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Portfolio message" + (topic ? ` · ${topic}` : ""),
          name,
          email,
          topic,
          message,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-2xl border border-rule bg-transparent px-4 py-3 text-sm outline-none focus:border-cobalt dark:border-bone/20";

  return (
    <div className="rounded-3xl bg-rule/40 p-6 dark:bg-raised md:p-8">
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold tracking-tightest">Quick message</h3>
        <span className="label text-[10px] text-muted">~1 minute</span>
      </div>

      {status === "sent" ? (
        <p className="mt-8 text-lg">Thanks — your message is on its way. I&rsquo;ll reply soon.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="label text-[10px] text-muted">Your name</span>
              <input name="name" required className={cn(field, "mt-2")} />
            </label>
            <label className="block">
              <span className="label text-[10px] text-muted">Your email</span>
              <input name="email" type="email" required className={cn(field, "mt-2")} />
            </label>
          </div>

          <div>
            <span className="label text-[10px] text-muted">What&rsquo;s this about?</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTopic(t)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-bold transition-colors",
                    topic === t
                      ? "border-cobalt bg-cobalt text-paper"
                      : "border-rule hover:border-cobalt dark:border-bone/20",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="label text-[10px] text-muted">Message</span>
            <textarea name="message" required rows={4} className={cn(field, "mt-2 resize-y")} />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="label flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-cobalt disabled:opacity-60 dark:bg-bone dark:text-ink"
          >
            {status === "sending" ? "Sending…" : "Send message"} &#9993;
          </button>
          {status === "error" && (
            <p className="text-sm text-cobalt">Something went wrong — email me directly instead.</p>
          )}
        </form>
      )}
    </div>
  );
}
