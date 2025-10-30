import Expense, { ExpenseData } from "../../models/Expense";
import { ExpenseRepository } from "../repositories/ExpenseRepository";

export class ExpenseService {
    protected expenseRepository: ExpenseRepository;

    public constructor(expenseRepository: ExpenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public addExpense({
        name,
        description,
        category,
        cost,
    }: {
        name: string;
        description?: string | "";
        category: string;
        cost: number;
    }) {
        const expense = new Expense({ name, description, category, cost });
        this.expenseRepository.add(expense);
    }

    public getAllExpenses(): Expense[] {
        return this.expenseRepository.getAll();
    }

    public getExpenseById(id: string): Expense | null {
        return this.expenseRepository.getById(id);
    }

    public updateExpenseById(
        id: string,
        updatedFields: Partial<ExpenseData>
    ): boolean {
        return this.expenseRepository.updateById(id, updatedFields);
    }

    public deleteExpenseById(id: string): boolean {
        if (!id) {
            console.log("[!] Invalid id");
            return false;
        }

        return this.expenseRepository.deleteById(id);
    }
}
