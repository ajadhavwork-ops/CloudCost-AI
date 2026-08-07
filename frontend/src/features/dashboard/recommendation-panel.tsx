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

import { recommendations } from "@/mock/recommendations";


export default function RecommendationPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-warning" />
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
                className="rounded-lg border border-border bg-surface-muted p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">
                    {item.title}
                  </h3>

                  <Badge>{item.priority}</Badge>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-success">
                    <TrendingDown className="h-4 w-4" />

                    <span>{item.saving}</span>
                  </div>

                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
