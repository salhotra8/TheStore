import { AdminProducts } from './../../models/admin-products';
import { ProductService } from './../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

    products;
    filteredProducts: any[];
    subscription: Subscription; 
    pagi: number =1;

    

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getAll()
      .subscribe(products => {
        this.filteredProducts = this.products = products;
        
      });  
  }


  filter(query: string){
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
  }

  key : string;
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
