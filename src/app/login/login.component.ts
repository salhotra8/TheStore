import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) { }
  
 login(){
  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  
 }

}
