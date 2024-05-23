import AccountBalances from "@/components/dashboard/account-balances";
import FinantialSummary from "@/components/dashboard/financial-summary";
import RecentFlows from "@/components/dashboard/recent-flows";

function Dashboard() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <div className="flex flex-row w-full gap-8">
        <AccountBalances />
        <FinantialSummary />
      </div>
      <div className="flex flex-row w-full gap-8">
        <RecentFlows />
      </div>
    </main>
  );
}

export default Dashboard;
