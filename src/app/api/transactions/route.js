import {
  getTransactions,
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionsByMonthAndYear,
} from "./repository.js";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const month = searchParams.get("month");
  const year = searchParams.get("year");

  try {
    if (id) {
      const transaction = await getTransaction(id);
      return new Response(JSON.stringify(transaction), { status: 200 });
    } else if (month && year) {
      const transactions = await getTransactionsByMonthAndYear(month, year);
      return new Response(JSON.stringify(transactions), { status: 200 });
    } else {
      const transactions = await getTransactions();
      return new Response(JSON.stringify(transactions), { status: 200 });
    }
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return new Response("Error fetching transactions", { status: 500 });
  }
}

export async function POST(request) {
  try {
    const transaction = await request.json();
    const result = await createTransaction(transaction);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error) {
    console.error("Error creating transaction:", error);
    return new Response("Error creating transaction", { status: 400 });
  }
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    const transaction = await request.json();
    const result = await updateTransaction(id, transaction);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error updating transaction:", error);
    return new Response("Error updating transaction", { status: 400 });
  }
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  try {
    const result = await deleteTransaction(id);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return new Response("Error deleting transaction", { status: 400 });
  }
}
