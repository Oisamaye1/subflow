import { Button } from "@/components/ui/button";
import { MetricsCard } from "../dashboard-components/metric-card";
import { VaultTable } from "../dashboard-components/vault-table";

export default function SubscriptionPage() {
    return (
      <main className="p-6 h-lvh">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Active Subscriptions</h1>
          <div className="text-sm text-muted-foreground">Aug 13, 2023 - Aug 18, 2023</div>
        </div>
        <Button variant="outline" className="gap-2 rounded bg-[#99E39E] border-[#99E39E] text-black hover:text-[#99E39E]">
        New Subscription
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
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
      </div>
      <div className="mt-6">
        <VaultTable />
      </div>
    </main>
    )
  }
  
  