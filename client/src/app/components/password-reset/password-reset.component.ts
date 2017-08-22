import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {FellowItem} from "../../services/fellows/fellow";
import { HttpClientService } from "app/services/http-client.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  model: any = {};
  loading = false;
  checkEmail = false;
  error = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private httpClient: HttpClientService) {

  }

  ngOnInit() {
  }

  resetPassword() {
    this.authenticationService.resetPassword(this.model.email)
      .subscribe(result => {
        this.checkEmail = true;
      }, error => {
        this.error = 'Email is incorrect';
        this.loading = false;
      });
  }
}
