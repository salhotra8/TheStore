import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AutheService } from './services/authe.service';
import { environment } from './../environments/environment';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterProductsComponent } from './products/filter-products/filter-products.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    FilterProductsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    
    HttpClientModule,
    Ng2OrderModule,
    NgxPaginationModule,
    
   
    

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success', component: OrderSucessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuard]},
      
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

  providers: [
    AutheService,
    AuthGuard,
    UserService,
    AdminAuthGuard, 
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
