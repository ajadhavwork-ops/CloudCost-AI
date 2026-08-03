"use client";

import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <Card
className="
border
border-white/10
bg-white/5
backdrop-blur-xl
shadow-lg
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500/40
hover:shadow-blue-500/10
">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <Icon className="h-6 w-6 text-blue-500" />

          <span className="text-xs text-green-400">
            {change}
          </span>
        </div>

        <h3 className="mt-6 text-sm text-zinc-400">
          {title}
        </h3>

        <p className="mt-2 text-3xl font-bold text-white">
          {value}
        </p>

        <p className="mt-2 text-xs text-zinc-500">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}