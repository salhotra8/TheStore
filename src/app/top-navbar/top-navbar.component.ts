import { AutheService } from './../services/authe.service';
import { Component } from '@angular/core';
import { AppUser } from '../models/app-user';


@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  appUser: AppUser;
  
  constructor(private authe: AutheService) {
    authe.appUser$.subscribe(appUser => this.appUser = appUser);
  }
  logout(){
  this.authe.logout();
  }
}

