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
import { CalendarDays, Pencil } from "lucide-react";

export default function EditTransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Pencil className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Transaction</DialogTitle>
          <DialogDescription>
            Make changes to the transaction details here. Click save when you
            are done.
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
                    2023-05-01
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
          <Button variant="default" type="submit">
            Save changes
          </Button>
          <DialogClose asChild>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
