import { Product } from '../entities/Products';
import { Storable } from '../interfaces/Storable';


export abstract class Cart implements Storable {

    private products: Product[] = [];
    private storage: Storable;

    constructor(storage: Storable) {
        this.storage = storage;
    }

    addProduct(product: Product): void {

        this.products.push(product);


    }

    getProduct() {

        return this.products;
    }

    getTotal(): number {

        let total = 0;
        for (const product of this.products) {
            total += product.getPrice();
        }
        return total;
    }

    save(data: string | number): void {

        this.storage.save(data)

    }
    getData(): (string | number)[] {

        return this.products.flatMap(product => [product.getName(), product.getPrice()]);

    }
}

