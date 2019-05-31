import {Component, OnInit} from '@angular/core';
import {Fellow} from '../../classes/fellow';

import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  private req: any;
  fellowsList: [Fellow] = [] as [Fellow];

  constructor(private router: Router) {
  }

  ngOnInit() {}

}
