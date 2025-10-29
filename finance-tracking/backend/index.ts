import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { ExpenseRepository } from "./repositories/ExpenseRepository";
import { ExpenseService } from "./services/ExpenseService";

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
