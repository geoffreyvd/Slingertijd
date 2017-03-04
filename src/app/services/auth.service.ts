import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  user2: User;
	user = {
    username : "",
    password : "",
    token : ""
  }
  errorMessage: string;

  constructor(private httpService: HttpService, private router: Router) {
    this.errorMessage = '';    }
  
  logIn(user): void{
    this.httpService.login(user.username, user.password)
    .subscribe(
      id_token => this.loginSuccess(id_token),
      error => this.errorMessage = error
    );
  }

  loginSuccess(id_token: any): void {
    this.user.token = id_token.token;
    localStorage.setItem('id_token', this.user.token);
    this.errorMessage = '';
    this.router.navigate(['dashboard']);
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.httpService.getUser()
    .subscribe(
      user => {this.user2 = user;},
      error => this.errorMessage = error
    );
  }

  logOut(): void{
  	localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  loggedIn(): boolean {
  	return tokenNotExpired();
  }

  getToken(): string {
    return localStorage.getItem('id_token');
  }

  getName(): string {
    return this.user2.name;
  }
}
