import { ShoppingCartService } from './../shopping-cart.service';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { switchMap, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminProducts } from '../models/admin-products';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  filteredProducts: [];
  category : string;
  cart$:Observable<ShoppingCart>;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService : ProductService,
    private cartService: ShoppingCartService) {   
    
  }
  
  async ngOnInit(){
    this.cart$ =  (await this.cartService.getCart())
    this.populateProducts();
   
  }

  private applyFilter(){
    this.filteredProducts =(this.category) ? 
      this.products.filter(p => p.category === this.category) : this.products;
  }
  
  private populateProducts(){
    this.productService.getAll().pipe(
      switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      }))
  
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();   
      })
  }
}
