import { AdminProducts } from "./admin-products";

export interface ShoppingCartItem {
  products: AdminProducts;
  quantity: number;
}