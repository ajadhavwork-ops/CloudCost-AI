"use client";

import ReactECharts from "echarts-for-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { costTrendData } from "./chart-config";

export default function CostTrendChart() {
  const option = {
    tooltip: {
      trigger: "axis",
    },

    grid: {
      left: 10,
      right: 10,
      top: 20,
      bottom: 20,
      containLabel: true,
    },

    xAxis: {
      type: "category",
      data: costTrendData.months,
      boundaryGap: false,
    },

    yAxis: {
      type: "value",
    },

    series: [
      {
        data: costTrendData.values,
        type: "line",
        smooth: true,
        areaStyle: {},
      },
    ],
  };

  return (
    <Card className="border-zinc-800 bg-zinc-950">
      <CardHeader>
        <CardTitle>Cloud Cost Trend</CardTitle>
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