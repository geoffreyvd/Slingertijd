import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  private user: User;
  errorMessage: string;

  constructor(private httpService: HttpService, private router: Router) {
    this.errorMessage = '';
    this.user = new User();
  }

  ngOnInit(){
    
  }
  
  public logIn(user): void{
    this.httpService.login(user.username, user.password)
    .subscribe(
      id_token => this.loginSuccess(id_token),
      error => this.errorMessage = error
    );
  }

  private loginSuccess(id_token: any): void {
    localStorage.setItem('id_token', id_token.token);
    this.errorMessage = '';
    this.router.navigate(['dashboard']);
  }

  public retrieveUser(): void {
    if (this.user.name === ""){
      this.httpService.getUser()
      .subscribe(
        user => {this.user = user;},
        error => this.errorMessage = error
      );
    }    
  }

  public logOut(): void{
  	localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  loggedIn(): boolean {
  	return tokenNotExpired();
  }

  getToken(): string {
    return localStorage.getItem('id_token');
  }
 
}
