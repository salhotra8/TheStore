import { AdminProducts } from "./admin-products";

export class ShoppingCartItem {
    

  constructor( public product: AdminProducts, public quantity: number) {}

  get totalPrice() { return this.product.price * this.quantity; }
}