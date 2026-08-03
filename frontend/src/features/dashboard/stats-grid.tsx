"use client";

import StatCard from "./stat-card";
import { dashboardStats } from "@/mock/dashboard";

export default function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          description={stat.description}
          icon={stat.icon}
        />
      ))}
    </section>
  );
}