import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import {Observable} from 'rxjs/Rx'; // might lead to error
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = '/api/igc/';

@Injectable()
export class FellowsService {


  constructor(private http: Http) {
  }

  list() {
    return this.http.get(endpoint)
      .map(response => response.json())
      .catch(FellowsService.handleError)
  }

  get(slug) {
    return this.http.get(endpoint + slug + "/")
      .map(response => response.json())
      .catch(FellowsService.handleError)
  }

  private static handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || '' }`;
    } else {
      errMsg = "Server error occurred please try again.";
    }
    return Observable.throw(errMsg);
  }

}
