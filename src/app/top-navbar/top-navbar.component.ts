import  firebase  from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';



@Component({
  selector: 'top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent {
  
  user$ : Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
   this.user$ = afAuth.authState;
  }
   
logout(){   
 this.afAuth.signOut();
}
}
