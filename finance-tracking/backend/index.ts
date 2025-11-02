import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { ExpenseRepository } from "./repositories/ExpenseRepository";
import { ExpenseService } from "./services/ExpenseService";

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
// [x] add ExpenseService and ExpenseRepository
// [ ] move expenses routing to a separate file
const expenseRepository = new ExpenseRepository();
const expenseService = new ExpenseService(expenseRepository);

const expense1 = new Expense({
    name: "Pizza",
    description: "Lunch",
    category: "Junk Food",
    cost: 15,
});
const expense2 = new Expense({
    name: "Gas",
    description: "98",
    category: "Car",
    cost: 50,
});
const expense3 = new Expense({
    name: "Mouse",
    description: "Logitech Superlight 2",
    category: "Misc",
    cost: 125,
});
const expense4 = new Expense({
    name: "Backpack",
    description: "",
    category: "Misc",
    cost: 75,
});
const expense5 = new Expense({
    name: "Rent",
    description: "November",
    category: "Bills",
    cost: 315,
});

expenseRepository.add(expense1);
expenseRepository.add(expense2);
expenseRepository.add(expense3);
expenseRepository.add(expense4);
expenseRepository.add(expense5);

app.get("/expenses", (req, res) => {
    res.send(expenseService.getAllExpenses());
});

app.post("/expenses", (req, res) => {
    const { name, description, category, cost } = req.body;

    expenseService.addExpense({ name, description, category, cost });

    res.sendStatus(201);
});

app.put("/expenses/:id", (req, res) => {
    const id = req.params.id;
    const { name, description, category, cost } = req.body;

    const expenseWasUpdated = expenseService.updateExpenseById(id, {
        name,
        description,
        category,
        cost,
    });

    if (expenseWasUpdated) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.patch("/expenses/:id", (req, res) => {
    const id = req.params.id;
    const updatedFields = req.body;

    const expenseWasUpdated = expenseService.updateExpenseById(
        id,
        updatedFields
    );

    if (expenseWasUpdated) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.delete("/expenses/:id", (req, res) => {
    const id = req.params.id;

    const expenseWasDeleted = expenseService.deleteExpenseById(id);

    if (expenseWasDeleted) {
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
