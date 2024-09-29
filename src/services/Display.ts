import { Cart } from './Cart';

export class Display {
    private cart: Cart;

    constructor(cart: Cart) {
        this.cart = cart;
    }

    // Méthode pour afficher les produits et le total du panier
    showCart(): void {
        const products = this.cart.getProduct();
        if (products.length === 0) {
            console.log("Le panier est vide.");
        } else {
            console.log("Produits dans le panier:");
            products.forEach(product => {
                console.log(`- ${product.getName()} : ${product.getPrice()}€`);
            });
            console.log(`Total: ${this.cart.getTotal()}€`);
        }
    }
}
