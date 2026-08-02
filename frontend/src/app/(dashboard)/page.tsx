import DashboardHeader from "@/features/dashboard/dashboard-header";
import StatsGrid from "@/features/dashboard/stats-grid";
import CostTrendChart from "@/features/dashboard/charts/cost-trend-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid />

      <CostTrendChart />
    </div>
  );
}