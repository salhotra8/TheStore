import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items :ShoppingCartItem[] = [];
 

 

 constructor(public itemsMap: { [productId:string]: ShoppingCartItem }) {
  this.itemsMap = itemsMap || {};
   for (let productId in itemsMap)
   this.items.push(itemsMap[productId]);
 }
 

  get totalItemCount(){
   let count = 0;
   for (let productId in this.itemsMap)
      count += this.itemsMap[productId].quantity;
    return count;  
  }
}