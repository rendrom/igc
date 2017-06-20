import {Component, OnDestroy, OnInit} from '@angular/core';
import {FellowItem} from "../fellows/fellow";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {FellowsService} from "../fellows/fellows.service";
import {User} from "../user";
import {AuthenticationService} from "app/authentication.service";

@Component({
  selector: 'app-fellow-list',
  templateUrl: './fellow-list.component.html',
  styleUrls: ['./fellow-list.component.css']
})
export class FellowListComponent implements OnInit, OnDestroy {
  private req: any;
  user: User;
  fellowsList: [FellowItem] = [] as [FellowItem];

  constructor(private router: Router,
              private fellowsService: FellowsService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.req = this.fellowsService.list().subscribe(data => {
      this.fellowsList = data as [FellowItem]
    });
    this.user = this.authenticationService.user;
    this.authenticationService.userUpdate.subscribe(user => {
      this.user = user;
    });
  }

  goToDetail(slug) {
    let link = ['/fellow', slug];
    this.router.navigate(link);
  }

  goToEditDetail(slug) {
    let link = ['/fellow/edit', slug];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }
}
