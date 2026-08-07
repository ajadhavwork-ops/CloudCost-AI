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
      className="transition-colors hover:border-primary/40"
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <Icon className="h-5 w-5 text-primary" />

          <span className="text-xs font-medium text-success">
            {change}
          </span>
        </div>

        <h3 className="mt-6 text-sm font-medium text-muted-foreground">
          {title}
        </h3>

        <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
          {value}
        </p>

        <p className="mt-2 text-xs text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
