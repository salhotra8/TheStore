import { map, take } from 'rxjs/operators';
import { AdminProducts } from './models/admin-products';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {  
  x:any = {};
 

  constructor(private db:AngularFireDatabase)  {
  }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db
        .object('/shopping-carts/' + cartId).valueChanges();
  }

  // async getCart(): Promise<Observable<ShoppingCart>> {
  //   let cartId = await this.getOrCreateCartId();
  //   return this.db
  //       .object('/shopping-carts/' + cartId).valueChanges()
  //         .pipe(map((x) => new ShoppingCart(this.x.items)));         
  // }

  private getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }    

   addToCart(product: AdminProducts){
    this.updateQuantity(product, 1);
  }

  removeFromCart(product: AdminProducts){
    this.updateQuantity(product, -1);
  }

  async updateQuantity(product: AdminProducts, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);
    item$.valueChanges().pipe(take(1)).subscribe((item) => {
      // if(item.$exist()) item$.update({quantity: item.quantity + 1});
      // else item$.set({ product: product , quantity: 1});
      if (item) {
        item$.update({quantity: item['quantity'] + change});
      } else {
        item$.set({ product, quantity: 1 });
      }
    });
  }
}
