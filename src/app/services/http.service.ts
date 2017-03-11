import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../models/user';
import { Streamer } from '../models/streamer';
import { Category } from '../models/category';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {
	urlAPI: string;
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http, public authHttp: AuthHttp) { 
  	this.urlAPI = "http://test.slingertijd.nl/api/";    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  }

  login (email: string, password: string): Observable<string> {
    return this.http.post(this.urlAPI + 'authenticate', { email, password }, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  };

  getUser(): Observable<User> {
    return this.authHttp.get(this.urlAPI + 'authenticate')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getStreamers(): Observable<Streamer[]> {
    return this.authHttp.get(this.urlAPI + 'streamers')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCategories(): Observable<Category[]> {
    return this.authHttp.get(this.urlAPI + 'categories')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
	  let body = res.json();
	  return body || { };
	}

  private handleError (error: Response | any) {
	  // In a real world app, we might use a remote logging infrastructure
	  let errMsg: string;
	  if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  return Observable.throw(errMsg);
	}

}
