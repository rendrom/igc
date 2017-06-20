import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {AuthenticationService} from "./authentication.service";
import {User} from "./user";


@Injectable()
export class UserService {
  constructor(private http: Http,
              private authenticationService: AuthenticationService) {
  }

  getCurrentUser() {
    let headers = new Headers({'Authorization': 'JWT ' + this.authenticationService.token});
    let options = new RequestOptions({headers: headers});

    // get users from api
    return this.http.get('/account/me/', options)
      .map((response: Response) => response.json());
  }

}
