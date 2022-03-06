import { AutheService } from '../../../shared/services/authe.service';
import { Component} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authe: AutheService) { }

 login(){ 
  this.authe.login();
 }
}
