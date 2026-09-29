"use client";

import { useEffect, useState } from "react";

export function LocalClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000 * 20);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-3xl border border-rule p-6 dark:border-bone/15 dark:bg-raised">
      <p className="label text-[10px] text-muted">Local time · Ahmedabad</p>
      <p className="mt-2 text-5xl font-bold tracking-tightest">
        {time || "--:--"} <span className="text-base text-muted">IST</span>
      </p>
      <p className="mt-4 flex items-center gap-2 text-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-lime ring-4 ring-lime/30" />
        Available · freelance and full-time
      </p>
    </div>
  );
}
