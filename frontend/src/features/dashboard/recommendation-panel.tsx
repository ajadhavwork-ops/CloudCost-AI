"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, TrendingDown } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { ScrollArea } from "@/components/ui/scroll-area";

import { recommendations } from "./recommendations-data";

export default function RecommendationPanel() {
  return (
    <Card className="border-zinc-800 bg-zinc-950">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-400" />
          AI Recommendations
        </CardTitle>

        <Badge variant="secondary">
          {recommendations.length} Suggestions
        </Badge>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[320px] pr-4">
          <div className="space-y-4">
            {recommendations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">
                    {item.title}
                  </h3>

                  <Badge>{item.priority}</Badge>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <TrendingDown className="h-4 w-4" />

                    <span>{item.saving}</span>
                  </div>

                  <ArrowRight className="h-4 w-4 text-zinc-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}