"use client";

import ReactECharts from "echarts-for-react";
import { useTheme } from "next-themes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { costTrendData } from "@/mock/charts";
import { getChartTheme } from "@/lib/chart-theme";

export default function CostTrendChart() {
  const { resolvedTheme } = useTheme();
  const colors = typeof document === "undefined" ? null : getChartTheme();
  const option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: colors?.surface,
      borderColor: colors?.grid,
      textStyle: { color: colors?.tooltip },
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
      axisLine: { lineStyle: { color: colors?.grid } },
      axisLabel: { color: colors?.axis },
    },

    yAxis: {
      type: "value",
      axisLabel: { color: colors?.axis },
      splitLine: { lineStyle: { color: colors?.grid } },
    },

    series: [
      {
        data: costTrendData.values,
        type: "line",
        smooth: true,
        lineStyle: { color: colors?.primary, width: 2.5 },
        itemStyle: { color: colors?.primary },
        areaStyle: { color: colors?.primary, opacity: 0.14 },
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cloud Cost Trend</CardTitle>
      </CardHeader>

      <CardContent>
  <ReactECharts
    key={resolvedTheme}
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
