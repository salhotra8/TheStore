import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';



@NgModule({
  declarations: [
    TopNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports:[
    TopNavbarComponent

  ]
})
export class CoreModule { }
