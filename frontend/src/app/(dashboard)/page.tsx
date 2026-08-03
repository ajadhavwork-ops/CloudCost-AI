import DashboardHeader from "@/features/dashboard/dashboard-header";
import StatsGrid from "@/features/dashboard/stats-grid";

import CostTrendChart from "@/features/dashboard/charts/cost-trend-chart";
import ServiceDistributionChart from "@/features/dashboard/charts/service-distribution-chart";

import RecommendationPanel from "@/features/dashboard/recommendation-panel";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <StatsGrid />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <CostTrendChart />
        </div>

        <ServiceDistributionChart />
      </div>

      <RecommendationPanel />
    </div>
  );
}