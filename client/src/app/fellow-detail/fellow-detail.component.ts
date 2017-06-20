import {Component, OnDestroy, OnInit} from '@angular/core';
import {FellowItem} from "../fellows/fellow";
import {Http} from "@angular/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FellowsService} from "../fellows/fellows.service";

@Component({
  selector: 'app-fellow-detail',
  templateUrl: './fellow-detail.component.html',
  styleUrls: ['./fellow-detail.component.css']
})
export class FellowDetailComponent implements OnInit, OnDestroy {
  private req: any;
  private routeSub: any;
  fellow: FellowItem;
  slug:string;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router, private _fellow: FellowsService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      console.log(this.slug);
      this.req = this._fellow.get(this.slug).subscribe(data => {
        this.fellow = data as FellowItem
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }

}
