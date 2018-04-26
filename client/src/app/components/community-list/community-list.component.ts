import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../user';
import {AuthenticationService} from '../../services/authentication.service';
import {Community} from '../../classes/community';
import {CommunityService} from '../../services/community.service';
import {CommunityMember} from '../../classes/community-member';
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
          const community = x.community;
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
    const link = ['/community', slug];
    this.router.navigate(link);
  }

  goToEditDetail(slug) {
    const link = ['/community/edit', slug];
    this.router.navigate(link);
  }

  quitTheCommunity(community: Community, removeFrom: [Community]) {
    removeFrom = removeFrom || this.myCommunitiesList;
    this.reqList.push(
      this.fellowsService.quitTheCommunity(community).subscribe(
        data => {
          const index = removeFrom.findIndex((x: Community) => x.pk === community.pk);
          if (index !== -1) {
            const comm = removeFrom.splice(index, 1);
            if (comm.length && comm[0].is_public) {
              this.communitiesList.unshift(comm[0]);
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
          const index = this.invitedCommunitiesList.findIndex((x: Community) => x.pk === community.pk);
          if (index !== -1) {
            const comm = this.invitedCommunitiesList.splice(index, 1);
            if (comm.length) {
              this.myCommunitiesList.unshift(comm[0]);
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
          const index = this.communitiesList.findIndex((x: Community) => x.pk === community.pk);
          if (index !== -1) {
            const comm = this.communitiesList.splice(index, 1);
            if (comm.length) {
              this.myCommunitiesList.unshift(comm[0]);
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
