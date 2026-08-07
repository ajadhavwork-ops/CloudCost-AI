"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const modes = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div aria-label="Theme preference" className="hidden items-center rounded-lg border border-border bg-surface-muted p-0.5 sm:flex">
      {modes.map(({ value, label, icon: Icon }) => (
        <Tooltip key={value}><TooltipTrigger asChild><Button aria-label={`${label} theme`} aria-pressed={theme === value} className="size-7 rounded-md data-[active=true]:bg-card data-[active=true]:text-foreground data-[active=true]:shadow-sm" data-active={theme === value} onClick={() => setTheme(value)} size="icon-sm" variant="ghost"><Icon className="size-3.5" /></Button></TooltipTrigger><TooltipContent sideOffset={6}>{label}</TooltipContent></Tooltip>
      ))}
    </div>
  );
}
