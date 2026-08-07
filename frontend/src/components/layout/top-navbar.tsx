"use client";

import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-border bg-background/90 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/75 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Monitor your cloud infrastructure.
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">

        <ThemeToggle />

        <Button
          variant="ghost"
          size="icon"
        >
          <Search className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <Avatar>
          <AvatarFallback>
            AJ
          </AvatarFallback>
        </Avatar>

      </div>
    </header>
  );
}
