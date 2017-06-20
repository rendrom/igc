import {Component} from '@angular/core';

import {FellowsService} from "./fellows/fellows.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FellowsService]
})
export class AppComponent {
  title = 'lab 18.1';
}
