import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HttpClientService} from "./http-client.service";
import {Fellow} from "../classes/fellow"; // might lead to error

const endpoint = '/api/igc/fellow/';

@Injectable()
export class FellowsService {


  constructor(private http: HttpClientService) {
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

  update(slug, data: Fellow) {
    return this.http.put(endpoint + slug + "/", data)
      .map(response => response.json())
      .catch(FellowsService.handleError)
  }

  addPublication(slug, data) {
    return this.http.post(endpoint + slug + "/publications/", data)
      .map(response => response.json())
      .catch(FellowsService.handleError)
  }

  removePublication(slug, pk) {
    return this.http.del(endpoint + slug + "/publications/" + pk + "/")
      .map(response => response.json())
      .catch(FellowsService.handleError)
  }

  private static handleError(error: any) {
    let errMsg: string;
    errMsg = "Server error occurred please try again.";

    return Observable.throw(errMsg);
  }

}
