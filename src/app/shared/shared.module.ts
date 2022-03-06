import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { AutheService } from './services/authe.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    HttpClientModule
  ],

  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    Ng2OrderModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    HttpClientModule,
    CommonModule
  ],

  providers: [
    AutheService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    OrderService
  ]

})
export class SharedModule { }
