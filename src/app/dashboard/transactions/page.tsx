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
import EditTransactionDialog from "@/components/dashboard/transactions/dialogs/edit-transaction-dialog";
import DeleteTransactionDialog from "@/components/dashboard/transactions/dialogs/delete-transaction-dialog";
import AddTransactionDialog from "@/components/dashboard/transactions/dialogs/add-transaction-dialog";
import { isEmpty } from "lodash";
import TransactionsEmptyState from "@/components/dashboard/transactions/empty-states/transactions-empty-state";

interface Transaction {
  flow: string;
  account: string;
  category: string;
  amount: number;
  description: string;
  date: Date;
}

const Transactions = () => {
  const transactions: Transaction[] = [
    {
      flow: "Expense",
      account: "Checking",
      category: "Dining",
      amount: 25,
      description: "McDonald's",
      date: new Date(),
    },
  ];

  return (
    <main className="flex flex-col gap-8 p-8 h-full">
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
      {isEmpty(transactions) ? (
        <TransactionsEmptyState />
      ) : (
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
                    <AddTransactionDialog />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="font-medium">{transaction.flow}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{transaction.account}</div>
                      </TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="secondary">
                          {transaction.category}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.amount}€</TableCell>
                      <TableCell>
                        <div className="font-medium">
                          {transaction.description}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {transaction.date.toString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <EditTransactionDialog />
                          <DeleteTransactionDialog />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </main>
  );
};

export default Transactions;
