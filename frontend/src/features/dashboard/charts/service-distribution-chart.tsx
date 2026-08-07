"use client";

import ReactECharts from "echarts-for-react";
import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { serviceDistribution } from "@/mock/charts";
import { getChartTheme } from "@/lib/chart-theme";

export default function ServiceDistributionChart() {
  const { resolvedTheme } = useTheme();
  const colors = typeof document === "undefined" ? null : getChartTheme();
  const option = {
    tooltip: {
      trigger: "item",
      backgroundColor: colors?.surface,
      borderColor: colors?.grid,
      textStyle: { color: colors?.tooltip },
    },

    legend: {
      bottom: 0,
      textStyle: {
        color: colors?.axis,
      },
    },

    series: [
      {
        type: "pie",
        radius: ["45%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: colors?.surface,
          borderWidth: 2,
        },
        color: colors ? [colors.primary, colors.secondary, colors.positive, colors.neutral, colors.negative] : undefined,
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
    <Card>
      <CardHeader>
        <CardTitle>Service Distribution</CardTitle>
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
