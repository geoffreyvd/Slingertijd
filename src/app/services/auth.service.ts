import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpService } from '../services/http-service.service';

@Injectable()
export class AuthService {
	user = { 
	    username : "",
	    password : "",
	    token : ""
	  }
  errorMessage = '';

  constructor(private httpService: HttpService) { }
  
  logIn(user) :void{
  	this.httpService.login(user.username, user.password).subscribe(
        id_token => this.loginSuccess(id_token),
        error =>  this.errorMessage = <any>error
      );
  }

  loginFailure(error){
    throw "kon niet inloggen";    
  }

  loginSuccess(id_token){
    this.user.token = id_token.token;
    localStorage.setItem('id_token', this.user.token);
    this.errorMessage = '';
  }

  logOut() :void{
  	localStorage.removeItem('id_token');
  }

  loggedIn() :boolean {
  	return tokenNotExpired();
  }

}
