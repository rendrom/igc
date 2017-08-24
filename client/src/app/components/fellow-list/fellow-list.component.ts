import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Fellow} from '../../classes/fellow';
import {Router} from '@angular/router';
import {FellowsService} from '../../services/fellows.service';
import {User} from '../../user';
import {AuthenticationService} from 'app/services/authentication.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-fellow-list',
  templateUrl: './fellow-list.component.html',
  styleUrls: ['./fellow-list.component.css']
})
export class FellowListComponent implements OnInit, OnDestroy {

  @Input() fellows?: [Fellow];

  user: User;
  fellowsList: [Fellow] = [] as [Fellow];

  private reqList: [Subscription] = [] as [Subscription];

  constructor(private router: Router,
              private fellowsService: FellowsService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    if (this.fellows) {
      this.fellowsList = this.fellows;
    } else {
      this.reqList.push(
        this.fellowsService.list().subscribe(data => {
          this.fellowsList = data as [Fellow]
        })
      );
    }
    this.user = this.authenticationService.user;
    this.reqList.push(
      this.authenticationService.userUpdate.subscribe(user => {
        this.user = user;
      })
    );
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
    this.reqList.forEach(x => x.unsubscribe());
  }
}
