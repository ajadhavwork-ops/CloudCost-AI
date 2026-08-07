"use client";

import { Clock3 } from "lucide-react";
import { activities } from "@/mock/activity";


import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export default function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Cloud Activity</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.message}
            className="flex items-center justify-between"
          >
            <div>
              <p className="font-medium">{activity.service}</p>

              <p className="text-sm text-muted-foreground">
                {activity.message}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 className="h-4 w-4" />
              {activity.time}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
