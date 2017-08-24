import {EventEmitter, Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {User} from '../user';
import {HttpClientService} from './http-client.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';

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
    this.userUpdate.subscribe(data => {
      if (!data) {
        this.router.navigate(['/login']);
      }
    });
  }

  login(email: string, password: string): Observable<boolean> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/api-token-auth/', JSON.stringify({email, password}), options)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          // set token property
          this.token = token;
          this.httpClient.addHeader('Authorization', 'JWT ' + this.token);
          this.getUser();
          localStorage.setItem('currentUser', JSON.stringify({email, token}));
          return true;
        } else {
          return false;
        }
      });
  }

  signin(data: any): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('/account/register/', JSON.stringify(data), options)
      .map((response: Response) => {
        return response.json();
      });
  }

  resetPassword(email: string): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/account/password/reset/', JSON.stringify({email}), options)
      .map((response: Response) => {
        return response.json();
      });
  }

  resetPasswordConfirm({uid, token, new_password}): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('/account/password/reset/confirm/', JSON.stringify({uid, token, new_password}), options)
      .map((response: Response) => {
        return response.json();
      });
  }

  getCurrentUser(): Observable<User> {
    // get users from api
    return this.httpClient.get('/account/me/')
      .map((response: Response) => response.json())
  }

  getUser() {
    this.getCurrentUser().subscribe(data => {
      if (data) {
        this.user = data;
        this.userUpdate.emit(this.user);
      } else {
        this.logout();
      }
    }, () => {
      this.logout()
    })
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    this.user = null;
    localStorage.removeItem('currentUser');
    this.httpClient.removeHeader('Authorization');
    this.userUpdate.emit(null);
  }
}

