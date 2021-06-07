import { AdminProducts } from './../models/admin-products';
import { Component, Input} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product: AdminProducts;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart:any;

  constructor(private cartService: ShoppingCartService) {}

  addToCart(){  
    this.cartService.addToCart(this.product);
  }



 

}
