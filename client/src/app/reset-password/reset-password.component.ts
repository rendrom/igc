import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {FellowItem} from "../fellows/fellow";
import { HttpClientService } from "app/http-client.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  model: any = {};
  loading = false;
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
        if (result === true) {
          this.router.navigate(['/']);
        } else {
          this.error = 'Email or password is incorrect';
          this.loading = false;
        }
      }, error => {
        this.error = 'Email or password is incorrect';
        this.loading = false;
      });
  }
}
