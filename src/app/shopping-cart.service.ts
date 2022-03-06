import { map, take } from 'rxjs/operators';
import { AdminProducts } from './shared/models/admin-products';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingCart } from './shared/models/shopping-cart';
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
    this.updateItem(product, 1);
  }

  removeFromCart(product: AdminProducts){
    this.updateItem(product, -1);
  }

  async updateItem(product: AdminProducts, change: number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.key);
    
    item$.valueChanges().pipe(take(1)).subscribe((item:any) => {

      let quantity = ((item || {}).quantity || 0) + change;
      if(quantity === 0) item$.remove();
      
      else item$.update({ 
        title:product.title,
        imageUrl:product.imageUrl,
        price: product.price,
        quantity: quantity 
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
