"use client";

import * as React from "react";

import Sidebar from "./sidebar";
import TopNavbar from "./top-navbar";

const storageKey = "cloudcost-sidebar-collapsed";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setCollapsed(window.localStorage.getItem(storageKey) === "true");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem(storageKey, String(collapsed));
  }, [collapsed]);

  React.useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="flex min-h-screen overflow-x-hidden bg-background">
      <Sidebar collapsed={collapsed} onCollapse={() => setCollapsed((value) => !value)} />
      {mobileOpen && <button aria-label="Close navigation" className="fixed inset-0 z-40 bg-foreground/20 lg:hidden" onClick={() => setMobileOpen(false)} />}
      <Sidebar mobile onNavigate={() => setMobileOpen(false)} open={mobileOpen} />
      <div className="min-w-0 flex-1">
        <TopNavbar onOpenMobileNav={() => setMobileOpen(true)} />
        <main className="min-h-[calc(100vh-4rem)]">
          <div className="mx-auto w-full max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
