import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {HttpClientService} from "./http-client.service";
import {Community} from "../classes/community";
import {CommunityMember} from "../classes/community-member";
import {User} from "../user";
import {AuthenticationService} from "./authentication.service";

const endpoint = '/api/igc/community/';

@Injectable()
export class CommunityService {
  user: User;

  constructor(private http: HttpClientService, private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.user;
    this.authenticationService.userUpdate.subscribe(user => {
      this.user = user;
    });
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
    return this.http.get(endpoint + "detail/" + slug + "/")
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  quitTheCommunity(community: Community) {
    return this.http.del(endpoint + "member/" + community.slug + "/")
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  acceptInvitation(community: Community) {
    return this.http.patch(endpoint + "member/" + community.slug + "/", {is_active: true})
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  enterTheCommunity(community: Community) {
    return this.http.post(endpoint + "member/", {
      member_id: this.user.id,
      community_id: community.pk,
      is_active: true,
    })
      .map(response => response.json())
      .catch(CommunityService.handleError)
  }

  update(slug, data: Community) {
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
