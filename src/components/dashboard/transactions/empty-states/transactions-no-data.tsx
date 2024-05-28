import { Button } from "@/components/ui/button";

const TransactionsNoData = () => {
  return (
    <div className="h-full border border-dashed shadow-sm rounded-lg flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <h3 className="font-bold text-2xl tracking-tight">
          No transactions found
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          You either have not made any transactions yet or have no transactions
          for the selected month and year.
        </p>
        <Button className="mt-4">Add Transaction</Button>
      </div>
    </div>
  );
};

export default TransactionsNoData;
