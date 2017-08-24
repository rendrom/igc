import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

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

  createHeader() {
    let headers = new Headers();
    for (let h in this.headers) {
      if (this.headers.hasOwnProperty(h)) {
        let header = this.headers[h];
        headers.append(h, header);
      }
    }
    return headers;
  }

  get (url) {
    let headers = this.createHeader();
    let options = new RequestOptions({headers: headers});
    return this.http.get(url, options);
  }

  post(url, data) {
    let headers = this.createHeader();
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, data, options);
  }

  put(url, data) {
    let headers = this.createHeader();
    let options = new RequestOptions({headers: headers});
    return this.http.put(url, data, options);
  }

  /**
   * use delete instead
   * @deprecated
   * @param url
   */
  del(url) {
    let headers = this.createHeader();
    let options = new RequestOptions({headers: headers});
    return this.http.delete(url, options);
  }

}
