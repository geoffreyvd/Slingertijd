import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //TODO navigatie array

  constructor(private auth :AuthService){}

  logOut(){
    this.auth.logOut();
  }
}
