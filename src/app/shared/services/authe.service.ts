import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AutheService {

  user$ : Observable<firebase.User>;
  
  
  constructor (
    private userService:UserService,
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private router: Router) {

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

  // get appUser$(): Observable<AppUser> {
  //   return this.user$.pipe(
  //     switchMap(user => {
  //      if (user)
  //       return this.userService.get(user.uid).valueChanges();
        
  //       return (null);
  //     })
  //   );    
  // }
} 
