"use client";

import { QueryProvider } from "./query-provider";

import { TooltipProvider } from "@/components/ui/tooltip";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </QueryProvider>
  );
}
