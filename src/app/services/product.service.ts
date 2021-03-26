import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private db:AngularFireDatabase) { }

  create(product){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products').snapshotChanges().pipe(
      map(changes => 
        changes.map(res => ({ key: res.payload.key, ...res.payload.val() as {} }))
      )
    );
  }

  getProduct(productId){
    return this.db.object('/products/' + productId ).valueChanges();
  }

  updateProduct(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId){
    return this.db.object('/products/' + productId).remove();
  }
}
