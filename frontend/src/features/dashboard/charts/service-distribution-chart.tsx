"use client";

import ReactECharts from "echarts-for-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { serviceDistribution } from "./chart-config";

export default function ServiceDistributionChart() {
  const option = {
    tooltip: {
      trigger: "item",
    },

    legend: {
      bottom: 0,
      textStyle: {
        color: "#d4d4d8",
      },
    },

    series: [
      {
        type: "pie",
        radius: ["45%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#09090b",
          borderWidth: 2,
        },
        label: {
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: "bold",
          },
        },
        data: serviceDistribution,
      },
    ],
  };

  return (
    <Card className="border-zinc-800 bg-zinc-950">
      <CardHeader>
        <CardTitle>Service Distribution</CardTitle>
      </CardHeader>

      <CardContent>
        <ReactECharts
          option={option}
          style={{
            height: "320px",
            width: "100%",
            minHeight: "320px",
          }}
          opts={{ renderer: "canvas" }}
        />
      </CardContent>
    </Card>
  );
}