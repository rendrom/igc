import {Component, OnDestroy, OnInit} from '@angular/core';
import {FellowItem} from "../fellows/fellow";
import {Http} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FellowsService} from "../fellows/fellows.service";
import {User} from "app/user";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-fellow-detail',
  templateUrl: './fellow-detail.component.html',
  styleUrls: ['./fellow-detail.component.css']
})
export class FellowDetailComponent implements OnInit, OnDestroy {
  private req: any;
  private routeSub: any;
  fellow: FellowItem;
  slug: string;
  user: User;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fellowsService: FellowsService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.user = this.authenticationService.user;
    this.authenticationService.userUpdate.subscribe(user => {
      this.user = user;
    });
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.req = this.fellowsService.get(this.slug).subscribe(data => {
        this.fellow = data as FellowItem;
        this.route.data
          .subscribe((data: { editMode: false }) => {
            this.editMode = data.editMode;
          });
      })
    });
  }

  goToEditDetail(slug) {
    let link = ['/fellow/edit', slug];
    this.router.navigate(link);
  }

  save() {
    let link = ['/fellow/', this.slug];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}
