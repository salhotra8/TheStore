import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { OrderSucessComponent } from './components/order-sucess/order-sucess.component';
import { FilterProductsComponent } from './components/products/filter-products/filter-products.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    OrderSucessComponent,
    MyOrderComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    CheckOutComponent,
    FilterProductsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success/:id', component: OrderSucessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuard]},
      
    ])

  ]
})
export class ShoppingModule { }
