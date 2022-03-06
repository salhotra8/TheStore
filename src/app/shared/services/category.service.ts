import { AdminProducts } from '../models/admin-products';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  // getCategories() { 
  //   return this.db.list('/categories') 
  //   .snapshotChanges().subscribe((res) => {
  //     this.categories = res.map(change => ({key: change.payload.key, ...change.payload.val()}));
  //   });
  // }
  getCategories(){
    return this.db.list('/categories').snapshotChanges().pipe(
      map(changes => 
        changes.map(res => ({ key: res.payload.key, ...res.payload.val() as AdminProducts }))
      )
    );
  }
}
