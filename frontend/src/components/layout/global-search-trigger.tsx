"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function GlobalSearchTrigger() {
  return <Button aria-label="Search CloudCost AI" className="h-9 w-full max-w-md justify-start gap-2 border-border bg-surface-muted px-3 text-muted-foreground hover:bg-muted sm:w-[320px]" variant="outline">
    <Search className="size-4" /><span className="flex-1 text-left text-sm">Search CloudCost AI...</span><kbd className="hidden rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">Ctrl K</kbd>
  </Button>;
}
