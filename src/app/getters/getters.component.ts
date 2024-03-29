import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-getters',
  templateUrl: './getters.component.html',
  styleUrls: ['./getters.component.css']
})
export class GettersComponent implements OnInit {
  thing: string;

  constructor(public authHttp: AuthHttp, public auth: AuthService) {}

  ngOnInit() {
  }  

  get(url: string){
    this.authHttp.get('http://test.slingertijd.nl/api/' + url)
      .subscribe(
        data => this.thing = data.json(),
        err => console.log(err),
        () => console.log('Request Complete')
      );
  }

}
