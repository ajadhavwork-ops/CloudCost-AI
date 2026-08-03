"use client";

import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TopNavbar() {
  return (
    <header className="
sticky
top-0
z-50
flex
h-16
items-center
justify-between
border-b
border-white/5
bg-black/20
px-8
backdrop-blur-2xl
">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-sm text-zinc-400">
          Monitor your cloud infrastructure.
        </p>
      </div>

      <div className="flex items-center gap-4">

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