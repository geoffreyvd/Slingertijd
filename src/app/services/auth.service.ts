import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpService } from '../services/http-service.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	user = {
    username : "",
    password : "",
    token : ""
  }
  errorMessage: string;

  constructor(private httpService: HttpService, private router: Router) {
    this.errorMessage = '';
  }
  
  logIn(user){
    this.httpService.login(user.username, user.password)
    .subscribe(
      id_token => this.loginSuccess(id_token),
      error => this.loginFailure(error)
    );
    this.errorMessage;
  }

  loginFailure(error){
    this.errorMessage = <any>error;
  }

  loginSuccess(id_token){
    this.user.token = id_token.token;
    localStorage.setItem('id_token', this.user.token);
    this.errorMessage = '';
    this.router.navigate(['dashboard']);
  }

  logOut(): void{
  	localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  loggedIn(): boolean {
  	return tokenNotExpired();
  }

  getIdToken(){
    return localStorage.getItem('id_token');
  }
}
