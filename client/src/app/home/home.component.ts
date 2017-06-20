import {Component, OnDestroy, OnInit} from '@angular/core';
import {FellowItem} from "../fellows/fellow";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {FellowsService} from "../fellows/fellows.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private req: any;

  fellowsList: [FellowItem] = [] as [FellowItem];

  constructor(private http: Http, private router: Router, private _fellow: FellowsService) {
  }

  ngOnInit() {
    debugger;
    this.req = this._fellow.list().subscribe(data => {
      this.fellowsList = data as [FellowItem]
    })
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }
}
