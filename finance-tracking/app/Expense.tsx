export default class Expense {
    private name: string;
    private description?: string;
    private type?: string;
    private cost: number;

    constructor({
        name,
        description = "",
        type = "",
        cost,
    }: {
        name: string;
        description?: string;
        type?: string;
        cost: number;
    }) {
        this.name = name;
        this.description = description;
        this.type = type;
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

    getType(): string {
        return this.type || "";
    }

    setType(newType: string) {
        this.type = newType;
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
