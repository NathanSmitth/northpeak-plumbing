"use client";

import { useEffect, useState } from "react";

type Status = "available" | "limited" | "closed";

function getStatus(): Status {
  // Business operates in Atlantic Time (America/Moncton)
  const now = new Date().toLocaleString("en-US", { timeZone: "America/Moncton" });
  const atlantic = new Date(now);
  const day = atlantic.getDay(); // 0=Sun 1=Mon … 6=Sat
  const hour = atlantic.getHours();

  if (day >= 1 && day <= 5) {
    if (hour < 12) return "available"; // Weekday morning — same-day likely
    if (hour < 16) return "limited";   // Weekday afternoon — call to confirm
  }
  return "closed";
}

const config: Record<Status, { dot: string; text: string; bg: string; textColor: string }> = {
  available: {
    dot: "bg-green-400",
    text: "Same-day slots open",
    bg: "bg-green-50 border-green-200",
    textColor: "text-green-700",
  },
  limited: {
    dot: "bg-amber-400",
    text: "Limited slots today",
    bg: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
  },
  closed: {
    dot: "bg-slate-400",
    text: "Book for next day",
    bg: "bg-slate-50 border-slate-200",
    textColor: "text-slate-500",
  },
};

export default function SameDayPill() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(getStatus());
  }, []);

  // Render nothing until client mounts (avoids hydration mismatch)
  if (!status) return null;

  const c = config[status];

  return (
    <div
      className={`hidden lg:flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold ${c.bg} ${c.textColor}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse ${c.dot}`} />
      {c.text}
    </div>
  );
}
