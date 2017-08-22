import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-password-reset-confirm',
  templateUrl: './password-reset-confirm.component.html',
  styleUrls: ['./password-reset-confirm.component.css']
})
export class PasswordResetConfirmComponent implements OnInit {
  private routeSub: any;
  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.model.uid = params['uid'];
      this.model.token = params['token'];
    });
  }

  confirm() {
    this.loading = true;
    this.authenticationService.resetPasswordConfirm(this.model)
      .subscribe((result: any) => {
        this.router.navigate(['login']);
      }, error => {
        this.error = 'Password is incorrect';
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
