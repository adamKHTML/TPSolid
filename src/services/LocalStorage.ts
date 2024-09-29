import { Storable } from '../interfaces/Storable';

class LocalStorage implements Storable {


    save(data: string | number): void {
        localStorage.setItem('products', JSON.stringify(data));
    }

    getData(): (string | number)[] {
        const data = localStorage.getItem('products');
        return data ? JSON.parse(data) : [];
    }
}