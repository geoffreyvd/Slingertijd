import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  user = { 
    username : "",
    password : "",
    token : ""
  }
  errorMessage = '';

  constructor (private auth :AuthService){}

  ngOnInit() {  }

  login(user){
    try{
      this.auth.logIn(user);
    }catch(e){
      this.errorMessage = e;
    }
  }

  getIdToken(){
    return localStorage.getItem('id_token');
  }
}
