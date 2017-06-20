import {EventEmitter, Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {Router} from "@angular/router";
import {UserService} from "./user.service";
import {User} from "./user";
import {HttpClientService} from "./http-client.service";

@Injectable()
export class AuthenticationService {
  token: string;
  user: User;
  userUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private http: Http, private httpClient: HttpClientService, private router: Router) {
    // set token if saved in local storage
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    if (this.token) {
      this.httpClient.addHeader('Authorization', 'JWT ' + this.token);
      this.getUser();
    }
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api-token-auth/', JSON.stringify({username: username, password: password}), options)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          this.httpClient.addHeader('Authorization', 'JWT ' + this.token);
          this.getUser();
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          return true;
        } else {
          return false;
        }
      });
  }

  getCurrentUser() {
    // get users from api
    return this.httpClient.get('/account/me/')
      .map((response: Response) => response.json());
  }

  getUser() {
    this.getCurrentUser().subscribe(data => {
      this.user = data;
      this.userUpdate.emit(this.user);
    })
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    this.user = null;
    this.userUpdate.emit(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('currentUser');
    this.httpClient.removeHeader('Authorization');
  }
}

