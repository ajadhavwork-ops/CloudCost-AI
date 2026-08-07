"use client";

import * as React from "react";
import { Bell, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const notifications = [
  ["Budget alert", "AWS spend reached 82% of budget"],
  ["Cost anomaly", "EC2 spending increased 18%"],
  ["Recommendation", "4 resources can be rightsized"],
] as const;

export function NotificationsMenu() {
  const [open, setOpen] = React.useState(false);
  return <div className="relative"><Button aria-expanded={open} aria-haspopup="dialog" aria-label="Notifications, 3 unread" className="relative" onClick={() => setOpen((value) => !value)} size="icon" variant="ghost"><Bell className="size-4" /><span className="absolute right-1 top-1 size-1.5 rounded-full bg-primary ring-2 ring-background" /></Button>{open && <div aria-label="Notifications" className="absolute right-0 top-11 z-50 w-80 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-[var(--shadow-card)]" role="dialog"><div className="flex items-center justify-between px-2 py-2"><p className="text-sm font-semibold">Notifications</p><span className="text-xs text-muted-foreground">3 new</span></div>{notifications.map(([title, description]) => <button className="flex w-full gap-3 rounded-lg p-2.5 text-left hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" key={title}><Sparkles className="mt-0.5 size-4 shrink-0 text-primary" /><span><span className="block text-sm font-medium">{title}</span><span className="mt-0.5 block text-xs text-muted-foreground">{description}</span></span></button>)}</div>}</div>;
}
