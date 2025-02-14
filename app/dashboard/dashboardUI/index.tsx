import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MetricsCard } from "@/app/dashboard/dashboard-components/metric-card"
import { StatsChart } from "@/app/dashboard/dashboard-components/stats-bar"


export default function DashboardUI() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="text-sm text-muted-foreground">Aug 13, 2023 - Aug 18, 2023</div>
        </div>
        <Button variant="outline" className="gap-2 rounded bg-[#99E39E] border-[#99E39E] text-black hover:text-[#99E39E]">
        New Subscription
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Monthly Recurring Revenue"
          value="$2,892"
          change={{ value: "+$340", percentage: "-2.1%", isPositive: false }}
        />
        <MetricsCard
          title="Active Subscriptions"
          value="200"
          change={{ value: "+10", percentage: "+13.2%", isPositive: true }}
        />
        <MetricsCard
          title="Churn Rate"
          value="5%"
          change={{ value: "", percentage: "-23%", isPositive: false }}
        />
        <MetricsCard
          title="Wallet Balance"
          value="$6,892"
          change={{ value: "+$1,340", percentage: "+2.1%", isPositive: true }}
        />
      </div>
      <Card className="mt-6 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">General Statistics</h2>
          <div className="flex gap-2">
            <Button size="sm" variant="ghost">
              Today
            </Button>
            <Button size="sm" variant="ghost">
              Last week
            </Button>
            <Button size="sm" variant="ghost">
              Last month
            </Button>
            <Button size="sm" variant="ghost">
              Last 6 month
            </Button>
            <Button size="sm" variant="ghost">
              Year
            </Button>
          </div>
        </div>
        <StatsChart />
      </Card>
      
    </main>
  )
}

