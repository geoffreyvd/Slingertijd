import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpServiceService {
	urlAPI: string;

  constructor(private http: Http) { 
  	this.urlAPI = "http://test.slingertijd.nl/api/";
  }

  login (email: string, password: string): Observable<string> {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.urlAPI + "authenticate", { email, password }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  };

  private extractData(res: Response) {
	  let body = res.json();
	  console.log(body.token);
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
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}

}
