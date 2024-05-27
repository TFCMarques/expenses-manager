const Database = require("better-sqlite3");

const db = new Database("expenses-manager.sqlite", { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    flow TEXT NOT NULL,
    account_id INTEGER NOT NULL,
    category text NOT NULL,
    amount REAL NOT NULL,
    description TEXT,
    date TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS account (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    balance REAL NOT NULL
  );

  INSERT INTO categories (name) VALUES ('Food');
  INSERT INTO categories (name) VALUES ('Transportation');
  INSERT INTO categories (name) VALUES ('Entertainment');

  INSERT INTO account (name, balance) VALUES ('Savings', 1000);
  INSERT INTO account (name, balance) VALUES ('Checking', 500);

  INSERT INTO transactions (flow, account_id, category, amount, description, date) 
  VALUES ('Expense', 1, 'Food', 50, 'Lunch', '2022-01-01');
  INSERT INTO transactions (flow, account_id, category, amount, description, date) 
  VALUES ('Expense', 1, 'Transportation', 20, 'Bus fare', '2022-01-02');
  INSERT INTO transactions (flow, account_id, category, amount, description, date) 
  VALUES ('Expense', 2, 'Entertainment', 100, 'Concert tickets', '2022-01-03');
`);

module.exports = db;
