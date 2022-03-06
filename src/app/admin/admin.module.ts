import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { SharedModule } from './../shared/shared.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild ([
      { path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGuard] 
      },
  
      { path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard]
  
      },
      {
      path: 'admin/products/new',
      component: ProductFormComponent,
      canActivate: [AuthGuard]
      },
  
      { path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGuard] 
      }
  
    ]) 
  ],
  providers:[
    AdminAuthGuard
  ],
  exports:[
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ]
  
})
export class AdminModule { }
