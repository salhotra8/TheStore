import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AutheService } from '../../../shared/services/authe.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {
  orders$:any;
  
  constructor(
    private authService: AutheService,
    private orderService: OrderService) { 

    this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid).valueChanges()));
  }
  

}
