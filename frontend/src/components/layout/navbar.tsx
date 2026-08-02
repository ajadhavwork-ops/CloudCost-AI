"use client";

import { Bell, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-[#09090B] px-8">
      {/* Left */}
      <div>
        <h1 className="text-xl font-semibold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-zinc-400">
          Monitor your cloud infrastructure.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg border border-zinc-800 p-2 transition hover:bg-zinc-900">
          <Search className="h-5 w-5 text-zinc-400" />
        </button>

        <button className="rounded-lg border border-zinc-800 p-2 transition hover:bg-zinc-900">
          <Bell className="h-5 w-5 text-zinc-400" />
        </button>

        <Avatar>
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}