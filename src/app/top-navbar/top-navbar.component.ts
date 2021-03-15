import { AutheService } from './../services/authe.service';
import { Component } from '@angular/core';




@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  
  

  constructor(public authe: AutheService) {
  }
  logout(){
  this.authe.logout();
  }
}

