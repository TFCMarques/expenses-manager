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

export default function AccountBalances() {
  return (
    <Card className="w-full">
      <CardHeader className="px-7">
        <CardTitle>Account Balances</CardTitle>
        <CardDescription>Current account balances </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-accent text-white">
            <TableRow>
              <TableHead>Account</TableHead>
              <TableHead className="text-right">Current Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">Checking</div>
              </TableCell>
              <TableCell className="text-right">$2500.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Meals</div>
              </TableCell>
              <TableCell className="text-right">$200.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Savings</div>
              </TableCell>
              <TableCell className="text-right">$5500.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Broker</div>
              </TableCell>
              <TableCell className="text-right">$500.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Crypto</div>
              </TableCell>
              <TableCell className="text-right">$400.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
