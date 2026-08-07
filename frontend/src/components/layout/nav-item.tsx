"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface NavItemProps { title: string; href: string; icon: LucideIcon; collapsed?: boolean; onNavigate?: () => void; }

export default function NavItem({ title, href, icon: Icon, collapsed = false, onNavigate }: NavItemProps) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  const link = (
    <Link aria-current={active ? "page" : undefined} aria-label={collapsed ? title : undefined} href={href} onClick={onNavigate} className={cn(
      "group relative flex h-9 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      collapsed && "justify-center px-0",
      active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground",
    )}>
      {active && <span aria-hidden className="absolute left-0 h-4 w-0.5 rounded-r-full bg-sidebar-primary" />}
      <Icon className={cn("size-4 shrink-0", active && "text-sidebar-primary")} />
      {!collapsed && <span className="truncate">{title}</span>}
    </Link>
  );

  return collapsed ? <Tooltip><TooltipTrigger asChild>{link}</TooltipTrigger><TooltipContent side="right" sideOffset={10}>{title}</TooltipContent></Tooltip> : link;
}
