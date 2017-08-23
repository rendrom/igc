import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../user";
import {AuthenticationService} from "../../services/authentication.service";
import {CommunityItem} from "../../classes/community";
import {CommunityService} from "../../services/community.service";

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit, OnDestroy {
  private reqList: [any] = [] as [any];
  user: User;
  communitiesList: [CommunityItem] = [] as [CommunityItem];
  myCommunitiesList: [CommunityItem] = [] as [CommunityItem];

  constructor(private router: Router,
              private fellowsService: CommunityService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.reqList.push(this.fellowsService.list().subscribe(data => {
      this.communitiesList = data as [CommunityItem]
    }));
    this.reqList.push(this.fellowsService.myList().subscribe(data => {
      this.myCommunitiesList = data as [CommunityItem]
    }));
    this.user = this.authenticationService.user;
    this.reqList.push(this.authenticationService.userUpdate.subscribe(user => {
      this.user = user;
    }));
  }

  goToDetail(slug) {
    let link = ['/community', slug];
    this.router.navigate(link);
  }

  goToEditDetail(slug) {
    let link = ['/community/edit', slug];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.reqList.forEach(x => x.unsubscribe());
  }
}
