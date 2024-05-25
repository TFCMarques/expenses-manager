import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function RecentFlows() {
  return (
    <Card className="w-full">
      <CardHeader className="px-7">
        <CardTitle>Recent Flows</CardTitle>
        <CardDescription>Latest flows from your accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-accent text-white">
            <TableRow>
              <TableHead>Flow</TableHead>
              <TableHead className="hidden sm:table-cell">Account</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Amount</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Expense</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Checking</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Utilities
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$250.00</TableCell>
              <TableCell className="text-right">2023-06-23</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Income</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Savings</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Paycheck
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$1,500.00</TableCell>
              <TableCell className="text-right">2023-06-24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Expense</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Credit Card</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Shopping
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$350.00</TableCell>
              <TableCell className="text-right">2023-06-25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Income</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Checking</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Freelance
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$450.00</TableCell>
              <TableCell className="text-right">2023-06-26</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Expense</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Checking</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Groceries
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$250.00</TableCell>
              <TableCell className="text-right">2023-06-23</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Expense</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Checking</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Utilities
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$250.00</TableCell>
              <TableCell className="text-right">2023-06-23</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Income</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Savings</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Paycheck
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$1,500.00</TableCell>
              <TableCell className="text-right">2023-06-24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Income</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="font-medium">Checking</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Freelance
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">$450.00</TableCell>
              <TableCell className="text-right">2023-06-26</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
