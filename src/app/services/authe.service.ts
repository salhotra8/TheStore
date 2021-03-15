import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheService {

  user$ : Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState;
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      this.router.navigateByUrl(returnUrl)});
  }

  logout(){   
    this.afAuth.signOut();
   }


}
