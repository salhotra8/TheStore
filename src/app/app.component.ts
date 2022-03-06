import { Component } from '@angular/core';
import { AutheService } from './shared/services/authe.service';
import { UserService } from './shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService, private authe: AutheService) {

    authe.user$.subscribe(user => {

      if (user){
      userService.save(user);
      }
    });
  } 
}
