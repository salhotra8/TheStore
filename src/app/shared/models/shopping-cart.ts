import { AdminProducts } from './admin-products';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {

  items :ShoppingCartItem[] = [];


 constructor(private itemsMap: { [productId:string]: ShoppingCartItem }) {
   this.itemsMap = itemsMap || {};
   
   for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({...item, key: productId }));
    }
  }

 getQuantity(product : AdminProducts){
  let item =  this.itemsMap[product.key];
  return item ? item.quantity : 0;
}

 get totalPrice() { 
   let sum = 0;
    for( let productid in this.items)
      sum += this.items[productid].totalPrice;
    return sum;
 }
 
  get totalItemCount(){
   let count = 0;
   for (let productId in this.itemsMap)
      count += this.itemsMap[productId].quantity;
    return count;  
  }
}