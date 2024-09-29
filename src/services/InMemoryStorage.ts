import { Storable } from '../interfaces/Storable';

export class InMemoryStorage implements Storable {

    private storage: any[] = [];

    save(data: string | number): void {
        this.storage.push(data);
    }

    getData(): (string | number)[] {
        return this.storage;
    }
}
