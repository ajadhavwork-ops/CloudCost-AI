"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  title: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function NavItem({
  title,
  href,
  icon: Icon,
  active = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
        active
          ? "bg-blue-600 text-white shadow-sm"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      )}
    >
      <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />

      <span>{title}</span>
    </Link>
  );
}