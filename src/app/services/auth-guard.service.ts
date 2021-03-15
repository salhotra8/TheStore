import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AutheService } from './authe.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AutheService, private router: Router) { }

canActivate(route, state:RouterStateSnapshot) {
  return this.auth.user$.pipe(map(user => {
    if (user) return true

  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  return false;
  }));

}
}
