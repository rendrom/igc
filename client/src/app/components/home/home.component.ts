import {Component, OnInit} from '@angular/core';
import {FellowItem} from "../../services/fellows/fellow";

import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  private req: any;
  fellowsList: [FellowItem] = [] as [FellowItem];

  constructor(private router: Router) {
  }

  ngOnInit() {}

}
