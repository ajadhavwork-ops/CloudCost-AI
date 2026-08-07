"use client";

import { CircleHelp, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { GlobalSearchTrigger } from "./global-search-trigger";
import { NotificationsMenu } from "./notifications-menu";
import { ProfileMenu } from "./profile-menu";
import { ThemeToggle } from "./theme-toggle";

export default function TopNavbar({ onOpenMobileNav }: { onOpenMobileNav: () => void }) {
  return <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-6 lg:px-8">
    <Button aria-label="Open navigation" className="lg:hidden" onClick={onOpenMobileNav} size="icon" variant="ghost"><Menu className="size-5" /></Button>
    <div className="hidden min-w-36 lg:block"><p className="text-sm font-semibold tracking-tight">Overview</p><p className="text-xs text-muted-foreground">Cloud operations</p></div>
    <div className="min-w-0 flex-1"><GlobalSearchTrigger /></div>
    <div className="flex shrink-0 items-center gap-1 sm:gap-2"><ThemeToggle /><NotificationsMenu /><Tooltip><TooltipTrigger asChild><Button aria-label="Help and documentation" size="icon" variant="ghost"><CircleHelp className="size-4" /></Button></TooltipTrigger><TooltipContent side="bottom">Help & documentation</TooltipContent></Tooltip><ProfileMenu /></div>
  </header>;
}
