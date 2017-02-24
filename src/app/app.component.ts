import { Component } from '@angular/core';
import { AuthModule} from 'app/auth/auth.module';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpServiceService]
})
export class AppComponent {
  id_token = 'app works!';
  errorMessage = 'error';

  	constructor (private httpService: HttpServiceService){}

  	ngOnInit() { this.login(); }

  	login(){
  		this.httpService.login("test@slingertijd.nl", "slingertijd").subscribe(
                       id_token => this.loginSuccess(id_token),
                       error =>  this.errorMessage = <any>error);
  	}

    loginSuccess(id_token: string){
      localStorage.setItem('id_token', this.id_token);
      this.id_token = id_token;
    }



}
