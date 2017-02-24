import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-appcomponent2',
  templateUrl: './appcomponent2.component.html',
  styleUrls: ['./appcomponent2.component.css']
})
export class Appcomponent2Component implements OnInit {

	thing: Response;
	data: any;
 
  constructor(public authHttp: AuthHttp) {}

  ngOnInit() {
  }

  getThing() {
    this.authHttp.get('http://example.com/api/thing')
      .subscribe(
        data => this.data = data.json().data,
        err => console.log(err),
        () => console.log('Request Complete')
      );
  }

}
