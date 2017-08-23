import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HttpClientService} from "./http-client.service";
import {CommunityItem} from "../classes/community";

const endpoint = '/api/igc/community/';

@Injectable()
export class CommunityService {

  constructor(private http: HttpClientService) {
  }

  list() {
    return this.http.get(endpoint)
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  myList() {
    return this.http.get(endpoint + "my/")
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  get (slug) {
    return this.http.get(endpoint + slug + "/")
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  update(slug, data: CommunityItem) {
    return this.http.put(endpoint + slug + "/", data)
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  private static handleError(error: any) {
    let errMsg: string;
    errMsg = "Server error occurred please try again.";

    return Observable.throw(errMsg);
  }

}
