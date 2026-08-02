"use client";

import { Cloud } from "lucide-react";

import { navigation } from "@/constants/navigation";
import { SIDEBAR_WIDTH } from "@/constants/theme";

import NavItem from "./nav-item";

export default function Sidebar() {
  return (
    <aside
      className="hidden lg:flex lg:flex-col border-r border-zinc-800 bg-[#09090B]"
      style={{ width: `${SIDEBAR_WIDTH}px` }}
    >
      {/* Brand */}
      <div className="border-b border-zinc-800 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
            <Cloud className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              CloudCost AI
            </h1>

            <p className="text-xs text-zinc-400">
              Intelligent FinOps
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <NavItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  icon={item.icon}
                  active={item.href === "/"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}