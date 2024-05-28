import db from "../db.js";

export async function getTransactions() {
  return db.prepare("SELECT * FROM transactions").all();
}

export async function getTransaction(id) {
  return db.prepare("SELECT * FROM transactions WHERE id = ?").get(id);
}

export async function createTransaction(transaction) {
  const { flow, account_id, category, amount, description, date } = transaction;
  return db
    .prepare(
      "INSERT INTO transactions (flow, account_id, category, amount, description, date) VALUES (?, ?, ?, ?, ?, ?)"
    )
    .run(flow, account_id, category, amount, description, date);
}

export async function updateTransaction(id, transaction) {
  const { flow, account_id, category, amount, description, date } = transaction;
  return db
    .prepare(
      "UPDATE transactions SET flow = ?, account_id = ?, category = ?, amount = ?, description = ?, date = ? WHERE id = ?"
    )
    .run(flow, account_id, category, amount, description, date, id);
}

export async function deleteTransaction(id) {
  return db.prepare("DELETE FROM transactions WHERE id = ?").run(id);
}

export async function getTransactionsByMonthAndYear(month, year) {
  return db
    .prepare(
      `
    SELECT * FROM transactions
    WHERE strftime('%m', date) = @month AND strftime('%Y', date) = @year
  `
    )
    .all({ month: String(month).padStart(2, "0"), year });
}
