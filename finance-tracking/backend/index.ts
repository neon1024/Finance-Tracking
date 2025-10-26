import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import Expense from "../models/Expense";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend for the Finance Tracking App");
});

// Expenses
const expenses: Expense[] = [];
expenses.push(new Expense({ name: "Pizza", category: "Food", cost: 15 }));

app.get("/expenses", (req, res) => {
    res.send(expenses);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
