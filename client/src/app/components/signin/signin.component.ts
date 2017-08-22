import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {FellowItem} from "../../services/fellows/fellow";

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
        if (result && result.slug) {
          this.authenticationService.login(this.model.email, this.model.password).subscribe(data => {
              if (data) {
                this.router.navigate(['/fellow/edit/', result.slug]);
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
