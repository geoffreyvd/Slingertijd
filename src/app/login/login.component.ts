import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpServiceService]
})
export class LoginComponent implements OnInit {
  user = { 
    username : "",
    password : "",
    token : ""
  }
  errorMessage = '';

  	constructor (private httpService: HttpServiceService){}

  	ngOnInit() {  }

  	login(user){
  		this.httpService.login(user.username, user.password).subscribe(
        id_token => this.loginSuccess(id_token),
        error =>  this.errorMessage = <any>error);
    }

    loginSuccess(id_token){
      this.user.token = id_token.token;
      localStorage.setItem('id_token', this.user.token);
      this.errorMessage = '';
    }

    getIdToken(){
      return localStorage.getItem('id_token');
    }
}
