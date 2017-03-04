import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = { 
    username : "",
    password : ""
  }

  constructor (private auth :AuthService){}

  ngOnInit() {  }

  login(user): void{
    this.auth.logIn(user);
  }
}
