import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app'; 




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/user/' + user.uid).update({
    
      name : user.displayName,
      email: user.email

    });
  }

}
