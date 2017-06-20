import {Component, OnDestroy, OnInit} from '@angular/core';
import {FellowItem} from "../fellows/fellow";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {FellowsService} from "../fellows/fellows.service";

@Component({
  selector: 'app-fellow-list',
  templateUrl: './fellow-list.component.html',
  styleUrls: ['./fellow-list.component.css']
})
export class FellowListComponent implements OnInit, OnDestroy {
  private req: any;
  fellowsList: [FellowItem] = [] as [FellowItem];

  constructor(private http: Http, private router: Router, private _fellow: FellowsService) {
  }

  ngOnInit() {
    this.req = this._fellow.list().subscribe(data => {
      this.fellowsList = data as [FellowItem]
    })
  }

  goToDetail(slug) {
    let link = ['/fellow', slug];
    this.router.navigate(link);
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }
}
