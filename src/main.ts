import { Product } from './entities/Products';
import { InMemoryStorage } from './services/InMemoryStorage';
import { StoreCart } from './services/StoreCart';
import { CartManager } from './services/CartManager';
import { Display } from './services/Display';

function main() {
    const storage = new InMemoryStorage();
    const cart = new StoreCart(storage);
    const cartManager = new CartManager(cart);
    const display = new Display(cart);


    const products = [
        new Product("Chaussures", 50),
        new Product("Chemise", 30),
        new Product("Pantalon", 40),
        new Product("Montre", 120),
        new Product("Sac", 80),
    ];

    // Ajout des produits au panier
    for (const product of products) {
        cart.addProduct(product);
    }

    console.log("Panier initial:");
    display.showCart();

    // Suppression du premier produit du panier
    const productToRemove = cart.getProduct()[0].getName();
    cartManager.removeProduct(productToRemove);


    console.log(`\nSuppression de ${productToRemove}:`);
    display.showCart();
}


main();
