import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AutheService } from './authe.service';
import { Injectable } from '@angular/core';
//import { CanActivate } from '@angular/router';
//import { map, mapTo, switchMap } from 'rxjs/operators';


 
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard {

  constructor(private authe: AutheService,private userService: UserService ) { }

//   canActivate(): Observable<boolean> {
//     return this.authe.user$.pipe(
//         switchMap(user =>
//           this.userService.get(user.uid).valueChanges()),
//           map(appUser => appUser && appUser.isAdmin || null))
      
//   } 
}

