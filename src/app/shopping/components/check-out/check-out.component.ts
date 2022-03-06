import { ShoppingCartService } from '../../../shopping-cart.service';
import { Observable} from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit { 
  
  cart$: Observable<ShoppingCart>;

  
  
  constructor(
    private cartService: ShoppingCartService) {}

  async ngOnInit() {
   this.cart$= await this.cartService.getCart();
    
    
  }  
  
}
