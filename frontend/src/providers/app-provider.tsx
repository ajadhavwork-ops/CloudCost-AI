"use client";

import { ThemeProvider } from "./theme-provider";
import { QueryProvider } from "./query-provider";

import { TooltipProvider } from "@/components/ui/tooltip";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="cloudcost-theme"
      >
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
