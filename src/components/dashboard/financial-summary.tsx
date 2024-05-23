import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function FinantialSummary() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Summary</CardTitle>
        <CardDescription>Overview of your financial status</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center">
          <div>Total Income</div>
          <div className="ml-auto">$5,050.00</div>
        </div>
        <div className="flex items-center">
          <div>Total Expenses</div>
          <div className="ml-auto">$350.00</div>
        </div>
        <div className="flex items-center">
          <div>Net Profit</div>
          <div className="ml-auto font-medium">$4,700.00</div>
        </div>
        <Separator />
        <div className="flex items-center">
          <div>Investments</div>
          <div className="ml-auto">$15,000.00</div>
        </div>
        <div className="flex items-center">
          <div>Retirement Savings</div>
          <div className="ml-auto">$25,000.00</div>
        </div>
        <div className="flex items-center font-medium">
          <div>Total Net Worth</div>
          <div className="ml-auto">$44,700.00</div>
        </div>
      </CardContent>
    </Card>
  );
}
