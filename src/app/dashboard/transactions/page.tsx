import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { CardContent, Card } from "@/components/ui/card";

export default function Transactions() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <div className="flex gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">January</SelectItem>
            <SelectItem value="2">February</SelectItem>
            <SelectItem value="3">March</SelectItem>
            <SelectItem value="4">April</SelectItem>
            <SelectItem value="5">May</SelectItem>
            <SelectItem value="6">June</SelectItem>
            <SelectItem value="7">July</SelectItem>
            <SelectItem value="8">August</SelectItem>
            <SelectItem value="9">September</SelectItem>
            <SelectItem value="10">October</SelectItem>
            <SelectItem value="11">November</SelectItem>
            <SelectItem value="12">December</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
          </SelectContent>
        </Select>
        <Button className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
          Submit
        </Button>
      </div>
      <Card className="w-full">
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Flow</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Expense</TableCell>
                <TableCell>Checking</TableCell>
                <TableCell>Groceries</TableCell>
                <TableCell>$150.00</TableCell>
                <TableCell>Grocery shopping</TableCell>
                <TableCell>2023-05-01</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Income</TableCell>
                <TableCell>Checking</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>$5,000.00</TableCell>
                <TableCell>May Salary</TableCell>
                <TableCell>2023-05-15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Expense</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Utilities</TableCell>
                <TableCell>$200.00</TableCell>
                <TableCell>Electricity bill</TableCell>
                <TableCell>2023-05-20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Income</TableCell>
                <TableCell>Savings</TableCell>
                <TableCell>Interest</TableCell>
                <TableCell>$50.00</TableCell>
                <TableCell>Monthly interest</TableCell>
                <TableCell>2023-05-31</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Expense</TableCell>
                <TableCell>Checking</TableCell>
                <TableCell>Dining</TableCell>
                <TableCell>$75.00</TableCell>
                <TableCell>Dinner with friends</TableCell>
                <TableCell>2023-06-01</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Income</TableCell>
                <TableCell>Checking</TableCell>
                <TableCell>Freelance</TableCell>
                <TableCell>$1,500.00</TableCell>
                <TableCell>June freelance work</TableCell>
                <TableCell>2023-06-15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Expense</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Shopping</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>New clothes</TableCell>
                <TableCell>2023-06-20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Income</TableCell>
                <TableCell>Savings</TableCell>
                <TableCell>Interest</TableCell>
                <TableCell>$50.00</TableCell>
                <TableCell>June interest</TableCell>
                <TableCell>2023-06-30</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
