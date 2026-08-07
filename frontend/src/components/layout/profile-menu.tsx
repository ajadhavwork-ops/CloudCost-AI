"use client";

import * as React from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const items = ["Profile", "Preferences", "Settings", "Sign out"];

export function ProfileMenu() {
  const [open, setOpen] = React.useState(false);
  return <div className="relative"><button aria-expanded={open} aria-haspopup="menu" aria-label="Open user menu" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={() => setOpen((value) => !value)}><Avatar><AvatarFallback className="bg-secondary text-xs font-semibold text-secondary-foreground">AC</AvatarFallback></Avatar></button>{open && <div className="absolute right-0 top-11 z-50 w-56 rounded-xl border border-border bg-popover p-1.5 shadow-[var(--shadow-card)]" role="menu"><div className="border-b border-border px-2.5 py-2"><p className="text-sm font-medium">Aadi Choudhary</p><p className="text-xs text-muted-foreground">CloudCost Admin</p></div>{items.map((item) => <button className="mt-1 w-full rounded-md px-2.5 py-2 text-left text-sm hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" key={item} role="menuitem">{item}</button>)}</div>}</div>;
}
