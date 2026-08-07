"use client";

import { Cloud } from "lucide-react";

import { navigation } from "@/constants/navigation";
import { SIDEBAR_WIDTH } from "@/constants/theme";

import NavItem from "./nav-item";

export default function Sidebar() {
  return (
    <aside
      className="hidden border-r border-sidebar-border bg-sidebar lg:flex lg:flex-col"
      style={{ width: `${SIDEBAR_WIDTH}px` }}
    >
      {/* Brand */}
      <div className="border-b border-sidebar-border px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sidebar-primary">
            <Cloud className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-tight text-sidebar-foreground">
              CloudCost AI
            </h1>

            <p className="text-xs text-muted-foreground">
              Intelligent FinOps
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {navigation.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
