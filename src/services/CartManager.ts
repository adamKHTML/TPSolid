import { StoreCart } from './StoreCart';

export class CartManager {
    private cart: StoreCart;

    constructor(cart: StoreCart) {
        this.cart = cart;
    }


    removeProduct(productName: string): void {
        const product = this.cart.getProduct().find(p => p.getName() === productName);
        if (product) {

            const products = this.cart.getProduct();
            const index = products.indexOf(product);
            if (index > -1) {
                products.splice(index, 1);
            }
        }
    }
}
