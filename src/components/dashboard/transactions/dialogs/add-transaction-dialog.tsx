import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarDays, Pencil, Plus } from "lucide-react";

export default function AddTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-7 w-full" size="sm" variant="default">
          <Plus className="w-4 h-4" />
          <span className="pl-1">Add</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Transaction</DialogTitle>
          <DialogDescription>
            Add the transaction details here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid gap-2">
              <Label className="text-sm text-left" htmlFor="flow">
                Flow
              </Label>
              <Select defaultValue="Income">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select flow" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Income">Income</SelectItem>
                  <SelectItem value="Expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm text-left" htmlFor="account">
                Account
              </Label>
              <Select defaultValue="Checking">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Checking">Checking</SelectItem>
                  <SelectItem value="Credit Card">Credit Card</SelectItem>
                  <SelectItem value="Savings">Savings</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid gap-2">
              <Label className="text-sm text-left" htmlFor="account">
                Category
              </Label>
              <Select defaultValue="Checking">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Checking">Checking</SelectItem>
                  <SelectItem value="Credit Card">Credit Card</SelectItem>
                  <SelectItem value="Savings">Savings</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label className="text-sm text-left" htmlFor="amount">
                Amount
              </Label>
              <Input
                className="w-full"
                defaultValue="0.00"
                id="amount"
                type="number"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm text-left" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="w-full"
              defaultValue="Monthly paycheck"
              id="description"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid gap-2">
              <Label className="text-sm text-left" htmlFor="date">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full text-left" variant="outline">
                    27-05-2024
                    <CalendarDays className="ml-auto h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar initialFocus mode="single" />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
