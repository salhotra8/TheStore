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

  constructor(private db:AngularFireDatabase)  {
  }


  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db
        .object('/shopping-carts/' + cartId).valueChanges()
        .pipe(map((x:any) => new ShoppingCart(x.items)));
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
    
    item$.valueChanges().pipe(take(1)).subscribe((item:any) => {
      // if(item.$exist()) item$.update({quantity: item.quantity + 1});
      // else item$.set({ product: product , quantity: 1});
      let quantity = ((item || {}).quantity || 0) + change;
      if(quantity === 0) item$.remove();
      else item$.update({
       product : product , quantity
      });
      });
  }

  async clearFromCart(){
    let cartId = await this.getOrCreateCartId()
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }


  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

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
}
