import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }


  signin() {
    this.loading = true;
    this.authenticationService.signin(this.model)
      .subscribe((result: any) => {
        if (result && result.username) {
          this.authenticationService.login(result.username, this.model.password).subscribe(user => {
              if (user) {
                this.router.navigate(['/fellow/edit/', result.username]);
              }
            }
          );

        } else {
          this.error = 'Username or password is incorrect';
          this.loading = false;
        }
      }, error => {
        this.error = 'Username or password is incorrect';
        this.loading = false;
      });
  }
}
