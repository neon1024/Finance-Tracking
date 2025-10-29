export class Repository<
    T extends { getId(): string; setId(id: string): void }
> {
    protected data: T[];

    public constructor() {
        this.data = [];
    }

    public getAll(): T[] {
        return [...this.data];
    }

    public getById(id: string) {
        const item = this.data.find((item) => item.getId() == id);

        if (!item) {
            console.log(`[!] Item with id ${id} was not found`);
            return null;
        }

        return item;
    }

    public add(item: T) {
        this.data.push(item);
    }

    public deleteById(id: string): boolean {
        let indexToRemove = this.data.findIndex((item) => item.getId() == id);

        if (indexToRemove < 0) {
            console.log(`[!] Item with id ${id} not found`);
            return false;
        }

        this.data.splice(indexToRemove, 1);

        console.log(`Item with id ${id} was removed successfuly`);

        return true;
    }
}
