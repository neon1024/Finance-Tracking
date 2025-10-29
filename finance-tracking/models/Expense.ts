// TODO move models under backend
import uuid from "react-native-uuid";

export interface ExpenseData {
    name: string;
    description?: string;
    category: string;
    cost: number;
}

export default class Expense {
    private id: string;
    private name: string;
    private description?: string;
    private category: string;
    private cost: number;

    constructor({
        name,
        description = "",
        category = "",
        cost,
    }: {
        name: string;
        description?: string;
        category: string;
        cost: number;
    }) {
        this.id = uuid.v4();
        this.name = name;
        this.description = description;
        this.category = category;
        this.cost = cost;
    }

    getId(): string {
        return this.id;
    }

    setId(newId: string) {
        this.id = newId;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string) {
        this.name = newName;
    }

    getDescription(): string {
        return this.description || "";
    }

    setDescription(newDescription: string) {
        this.description = newDescription;
    }

    getCategory(): string {
        return this.category || "";
    }

    setCategory(newCategory: string) {
        this.category = newCategory;
    }

    getCost(): number {
        return this.cost;
    }

    setCost(newCost: number) {
        this.cost = newCost;
    }

    toString(): string {
        return `${this.name}: ${this.cost}$\n`;
    }
}
