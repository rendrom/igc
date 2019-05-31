import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpClientService {

  headers: any;

  constructor(private http: Http) {
    this.headers = {};
  }

  addHeader(header, value) {
    this.headers[header] = value;
  }

  removeHeader(header) {
    delete this.headers[header];
  }

  createHeader(): Headers {
    const headers = new Headers();
    for (const h in this.headers) {
      if (this.headers.hasOwnProperty(h)) {
        const header = this.headers[h];
        headers.append(h, header);
      }
    }
    return headers;
  }

  get (url): Observable<Response> {
    const headers = this.createHeader();
    const options = new RequestOptions({headers: headers});
    return this.http.get(url, options);
  }

  post(url, data): Observable<Response> {
    const headers = this.createHeader();
    const options = new RequestOptions({headers: headers});
    return this.http.post(url, data, options);
  }

  put(url, data): Observable<Response> {
    const headers = this.createHeader();
    const options = new RequestOptions({headers: headers});
    return this.http.put(url, data, options);
  }

  /**
   * use delete instead
   * @deprecated
   * @param url
   */
  del(url): Observable<Response> {
    const headers = this.createHeader();
    const options = new RequestOptions({headers: headers});
    return this.http.delete(url, options);
  }

  patch(url, data): Observable<Response> {
    const headers = this.createHeader();
    const options = new RequestOptions({headers: headers});
    return this.http.patch(url, data, options);
  }

}
