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
import { CardContent, Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash } from "lucide-react";
import EditTransactionDialog from "@/components/dashboard/transactions/edit-transaction-dialog";

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
        <Button variant="outline" aria-label="Submit">
          Submit
        </Button>
      </div>
      <Card className="w-full">
        <CardHeader className="px-7">
          <CardTitle>June 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-accent text-white">
              <TableRow>
                <TableHead>Flow</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Date</TableHead>
                <TableHead className="w-[88px]">
                  <Button className="h-7 w-full" size="sm" variant="default">
                    <Plus className="w-4 h-4" />
                    <span className="pl-1">Add</span>
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="font-medium">Expense</div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">Checking</div>
                </TableCell>
                <TableCell>
                  <Badge className="text-xs" variant="secondary">
                    Utilities
                  </Badge>
                </TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>
                  <div className="font-medium">Eletricity Bill</div>
                </TableCell>
                <TableCell className="text-right">2023-06-23</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <EditTransactionDialog />
                    <Button size="icon" variant="ghost">
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
