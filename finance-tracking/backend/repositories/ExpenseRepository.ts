import Expense, { ExpenseData } from "../../models/Expense";
import { Repository } from "./Repository";

export class ExpenseRepository extends Repository<Expense> {
    public updateById(
        id: string,
        updatedFields: Partial<ExpenseData>
    ): boolean {
        let itemToUpdate = this.data.find((item) => item.getId() == id);

        if (!itemToUpdate) {
            console.log(`[!] Item with id ${id} not found`);
            return false;
        }

        if (updatedFields.name) {
            itemToUpdate.setName(updatedFields.name);
        }

        if (updatedFields.description) {
            itemToUpdate.setDescription(updatedFields.description);
        }

        if (updatedFields.category) {
            itemToUpdate.setCategory(updatedFields.category);
        }

        if (updatedFields.cost) {
            itemToUpdate.setCost(updatedFields.cost);
        }

        return true;
    }
}
