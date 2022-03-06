import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../../../shared/models/order';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { AutheService } from '../../../shared/services/authe.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart:ShoppingCart;
  shipping:any = {};
  usersubscription:Subscription;
  userId: string;

  constructor(
    private orderService: OrderService,
    private authservice:AutheService,
    private router: Router) {}

  ngOnInit() {
    this.usersubscription = this.authservice.user$.subscribe(user => this.userId = user.uid)
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart)

    let result =  await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
    
  }    

  ngOnDestroy(){
    this.usersubscription.unsubscribe();
  } 
}
