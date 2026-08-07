"use client";

import { ChevronLeft, ChevronRight, Cloud, PanelLeftClose } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { navigation, sidebarFooter } from "@/constants/navigation";
import { cn } from "@/lib/utils";

import NavItem from "./nav-item";

interface SidebarProps { collapsed?: boolean; mobile?: boolean; open?: boolean; onCollapse?: () => void; onNavigate?: () => void; }

export default function Sidebar({ collapsed = false, mobile = false, open = false, onCollapse, onNavigate }: SidebarProps) {
  const ConnectionIcon = sidebarFooter.icon;
  return (
    <aside aria-label="Primary navigation" className={cn(
      "z-50 flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-[width,transform] duration-200 motion-reduce:transition-none",
      mobile ? "fixed inset-y-0 left-0 w-[288px] shadow-xl lg:hidden" : "sticky top-0 hidden lg:flex",
      mobile && !open && "-translate-x-full",
      !mobile && (collapsed ? "w-[76px]" : "w-[272px]"),
    )}>
      <div className={cn("flex h-16 items-center border-b border-sidebar-border", collapsed ? "justify-center px-3" : "justify-between px-4")}>
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary"><Cloud className="size-4 text-sidebar-primary-foreground" /></div>
          {!collapsed && <div className="min-w-0"><p className="truncate text-sm font-semibold tracking-tight text-sidebar-foreground">CloudCost AI</p><p className="text-[11px] text-muted-foreground">FinOps control center</p></div>}
        </div>
        {!mobile && !collapsed && <Tooltip><TooltipTrigger asChild><Button aria-label="Collapse sidebar" className="text-muted-foreground" onClick={onCollapse} size="icon-xs" variant="ghost"><ChevronLeft /></Button></TooltipTrigger><TooltipContent side="right">Collapse sidebar</TooltipContent></Tooltip>}
      </div>
      {!mobile && collapsed && <div className="flex justify-center border-b border-sidebar-border py-2"><Tooltip><TooltipTrigger asChild><Button aria-label="Expand sidebar" onClick={onCollapse} size="icon-xs" variant="ghost"><ChevronRight /></Button></TooltipTrigger><TooltipContent side="right">Expand sidebar</TooltipContent></Tooltip></div>}

      <nav className={cn("flex-1 overflow-y-auto py-4", collapsed ? "px-2" : "px-3")}>
        {navigation.map((section, index) => <div className="mb-4" key={section.title}>
          {index > 0 && !collapsed && <Separator className="mb-4" />}
          {!collapsed && <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{section.title}</p>}
          <div className="space-y-1">{section.items.map((item) => <NavItem collapsed={collapsed} key={item.href} onNavigate={onNavigate} {...item} />)}</div>
        </div>)}
      </nav>

      <div className={cn("border-t border-sidebar-border p-3", collapsed && "p-2")}>
        {collapsed ? <Tooltip><TooltipTrigger asChild><div className="flex h-9 items-center justify-center rounded-lg bg-success/10 text-success"><ConnectionIcon className="size-4" /></div></TooltipTrigger><TooltipContent side="right">{sidebarFooter.label}</TooltipContent></Tooltip> : <div className="rounded-lg border border-sidebar-border bg-surface-muted p-3"><div className="flex items-center gap-2 text-xs font-medium text-success"><span className="size-1.5 rounded-full bg-success" /><span>{sidebarFooter.label}</span></div><p className="mt-1 text-[11px] text-muted-foreground">{sidebarFooter.detail}</p></div>}
        {!collapsed && <div className="mt-2 flex items-center gap-2 px-2 text-xs text-muted-foreground"><PanelLeftClose className="size-3.5" />Workspace navigation</div>}
      </div>
    </aside>
  );
}
