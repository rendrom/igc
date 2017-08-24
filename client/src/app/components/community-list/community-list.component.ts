import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../user";
import {AuthenticationService} from "../../services/authentication.service";
import {Community} from "../../classes/community";
import {CommunityService} from "../../services/community.service";
import {CommunityMember} from "../../classes/community-member";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit, OnDestroy {
  user: User;
  communitiesList: [Community] = [] as [Community];
  myCommunitiesList: [Community] = [] as [Community];
  inactiveCommunitiesList: [Community] = [] as [Community];
  invitedCommunitiesList: [Community] = [] as [Community];

  private reqList: [Subscription] = [] as [Subscription];

  constructor(private router: Router,
              private fellowsService: CommunityService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.reqList.push(this.fellowsService.list().subscribe(data => {
      if (data && data.length) {
        this.communitiesList = data as [Community]
      }
    }));
    this.reqList.push(this.fellowsService.myList().subscribe(data => {
      if (data && data.length) {
        data.forEach((x: CommunityMember) => {
          let community = x.community;
          if (x.is_active) {
            this.myCommunitiesList.push(community);
          } else if (x.is_invited && !x.is_active) {
            this.invitedCommunitiesList.push(community);
          } else if (!x.is_active) {
            this.inactiveCommunitiesList.push(community);
          }
        })
      }
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

  quitTheCommunity(community: Community, removeFrom: [Community]) {
    removeFrom = removeFrom || this.myCommunitiesList;
    this.reqList.push(
      this.fellowsService.quitTheCommunity(community).subscribe(
        data => {
          let index = removeFrom.findIndex((x: Community) => x.pk === community.pk);
          if (index !== -1) {
            let community = removeFrom.splice(index, 1);
            if (community.length && community[0].is_public) {
              this.communitiesList.unshift(community[0]);
            }
          }
        },
        error => {
        })
    );
  }

  acceptInvitation(community: Community) {
    this.reqList.push(
      this.fellowsService.acceptInvitation(community).subscribe(
        data => {
          let index = this.invitedCommunitiesList.findIndex((x: Community) => x.pk === community.pk);
          if (index !== -1) {
            let community = this.invitedCommunitiesList.splice(index, 1);
            if (community.length) {
              this.myCommunitiesList.unshift(community[0]);
            }
          }
        },
        error => {
        })
    );
  }

  enterTheCommunity(community: Community) {
    this.reqList.push(
      this.fellowsService.enterTheCommunity(community).subscribe(
        data => {
          let index = this.communitiesList.findIndex((x: Community) => x.pk === community.pk);
          if (index !== -1) {
            let community = this.communitiesList.splice(index, 1);
            if (community.length) {
              this.myCommunitiesList.unshift(community[0]);
            }
          }
        },
        error => {
        })
    );
  }

  ngOnDestroy() {
    this.reqList.forEach(x => x.unsubscribe());
  }
}
