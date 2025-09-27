export default class Expense {
    private name: string;
    private description?: string;
    private category?: string;
    private cost: number;

    constructor({
        name,
        description = "",
        category = "",
        cost,
    }: {
        name: string;
        description?: string;
        category?: string;
        cost: number;
    }) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.cost = cost;
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
