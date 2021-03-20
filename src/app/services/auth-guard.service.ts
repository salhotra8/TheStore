import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AutheService } from './authe.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authe: AutheService, private router: Router) { }

canActivate(route, state:RouterStateSnapshot) {
  return this.authe.user$.pipe(map(user => {
    if (user) return true

  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  return false;
  }));

}
}
