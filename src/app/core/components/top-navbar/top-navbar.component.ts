import { ShoppingCartService } from '../../../shopping-cart.service';
import { AutheService } from '../../../shared/services/authe.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs';
//import { AppUser } from '../models/app-user';


@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {
  //appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  

  constructor(public authe: AutheService, private cartService: ShoppingCartService) {
    //authe.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  async ngOnInit(){
    this.cart$ = await this.cartService.getCart();
    
    
  }
  logout(){
  this.authe.logout();
  }
}

