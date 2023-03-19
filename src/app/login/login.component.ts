import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService : LoginService,private router : Router) {}

  users : User[] = [];

  login(userName:string,password :string){
    this.users = this.loginService.getAllUsersDetails();

    for(let user of this.users){
      if(user.userName == userName && user.password == password){
        return this.router.navigate(['/home'])
      }
    }
    return alert("Invalid Details");
  }
}
