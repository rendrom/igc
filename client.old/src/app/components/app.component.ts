import {Component, OnInit} from '@angular/core';

import {FellowsService} from "../services/fellows.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {User} from "app/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FellowsService]
})
export class AppComponent implements OnInit {
  title = '18.1';
  user: User = null;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {

  }

  goToMainPage() {
    let link = ['/'];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.user = this.authenticationService.user;
    this.authenticationService.userUpdate.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.authenticationService.logout();
  }


  ngOnDestroy() {
    this.authenticationService.userUpdate.unsubscribe();
  }
}
