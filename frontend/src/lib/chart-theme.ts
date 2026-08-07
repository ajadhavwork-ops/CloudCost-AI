export type ChartTheme = {
  primary: string;
  secondary: string;
  positive: string;
  negative: string;
  neutral: string;
  forecast: string;
  budget: string;
  grid: string;
  axis: string;
  tooltip: string;
  surface: string;
};

const token = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function getChartTheme(): ChartTheme {
  return {
    primary: token("--chart-1"),
    secondary: token("--chart-2"),
    positive: token("--chart-3"),
    negative: token("--chart-5"),
    neutral: token("--chart-4"),
    forecast: token("--chart-forecast"),
    budget: token("--chart-budget"),
    grid: token("--chart-grid"),
    axis: token("--chart-axis"),
    tooltip: token("--chart-tooltip"),
    surface: token("--surface"),
  };
}
