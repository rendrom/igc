import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../user';
import {AuthenticationService} from '../../services/authentication.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {CommunityService} from '../../services/community.service';
import {Subscription} from 'rxjs/Subscription';
import {Community} from '../../classes/community';
import {Fellow} from '../../classes/fellow';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.css']
})
export class CommunityDetailComponent implements OnInit, OnDestroy{

  public user: User;
  public community: Community;
  public fellows: Fellow[];
  public slug: string;

  private reqList: Subscription[] = [] as Subscription[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private communityService: CommunityService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = this.authenticationService.user;
    this.authenticationService.userUpdate.subscribe(user => {
      this.user = user;
    });
    this.reqList.push(
      this.route.params.subscribe(params => {
        this.slug = params['slug'];
        this.reqList.push(
          this.communityService.get(this.slug).subscribe(data => {
            this.community = data as Community;
            this.fellows = this.community.member.map(x => x.member)
          })
        );
      })
    );
  }

  ngOnDestroy() {
    this.reqList.forEach(x => x.unsubscribe());
  }

}
