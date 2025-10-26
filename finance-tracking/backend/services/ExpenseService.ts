import { ExpenseRepository } from "../repositories/ExpenseRepository";

export class ExpenseService {
    protected expenseRepository: ExpenseRepository;

    public constructor(expenseRepository: ExpenseRepository) {
        this.expenseRepository = expenseRepository;
    }
}
